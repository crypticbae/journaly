export function decodeEmailContent(emlContent: string): string {
  console.log('🔍 Decoding email content...')
  console.log(`📊 Total EML size: ${emlContent.length} characters`)
  
  // Verbesserter MIME-Parser für weitergeleitete Emails
  const parts = findMIMEParts(emlContent)
  console.log(`📧 Found ${parts.length} MIME parts`)
  
  // Suche nach HTML-Teil mit Base64
  for (const part of parts) {
    if (part.contentType.includes('text/html') && part.encoding === 'base64') {
      console.log('✅ Found Base64-encoded HTML part')
      try {
        const decoded = Buffer.from(part.content, 'base64').toString('utf-8')
        console.log(`🔐 Base64 decoded: ${decoded.length} characters`)
        console.log(`📋 First 300 chars:`, decoded.substring(0, 300))
        
        // Prüfe ob es Deals enthält
        if (decoded.toLowerCase().includes('deals:')) {
          console.log('🎯 Found deals in decoded content!')
          return decoded
        }
      } catch (error) {
        console.error('❌ Base64 decode failed:', error)
      }
    }
  }
  
  // Fallback: Suche nach direktem HTML
  const htmlMatch = emlContent.match(/<html[\s\S]*<\/html>/i)
  if (htmlMatch) {
    console.log('📧 Found direct HTML content')
    const content = htmlMatch[0]
    if (content.toLowerCase().includes('deals:')) {
      console.log('🎯 Found deals in direct HTML!')
      return content
    }
  }
  
  // Als letztes den originalen Content zurückgeben
  console.log('⚠️ Using original content as fallback')
  return emlContent
}

interface MIMEPart {
  contentType: string
  encoding: string
  content: string
}

function findMIMEParts(emlContent: string): MIMEPart[] {
  const parts: MIMEPart[] = []
  const lines = emlContent.split('\n')
  
  let currentPart: Partial<MIMEPart> = {}
  let inHeaders = false
  let inBody = false
  let bodyLines: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // MIME-Boundary oder Content-Type startet neuen Teil
    if (line.toLowerCase().includes('content-type:')) {
      // Speichere vorherigen Teil
      if (currentPart.contentType && bodyLines.length > 0) {
        parts.push({
          contentType: currentPart.contentType,
          encoding: currentPart.encoding || '',
          content: bodyLines.join('')
        })
      }
      
      // Neuer Teil
      currentPart = { contentType: line.toLowerCase() }
      bodyLines = []
      inHeaders = true
      inBody = false
      continue
    }
    
    if (inHeaders) {
      if (line.toLowerCase().includes('content-transfer-encoding:')) {
        currentPart.encoding = line.toLowerCase().includes('base64') ? 'base64' : ''
      }
      
      // Leere Zeile = Ende der Headers
      if (line === '') {
        inHeaders = false
        inBody = true
        continue
      }
    }
    
    if (inBody && line.length > 0 && !line.startsWith('--')) {
      bodyLines.push(line)
    }
  }
  
  // Letzten Teil speichern
  if (currentPart.contentType && bodyLines.length > 0) {
    parts.push({
      contentType: currentPart.contentType,
      encoding: currentPart.encoding || '',
      content: bodyLines.join('')
    })
  }
  
  return parts
} 