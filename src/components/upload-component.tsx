"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloudUpload, FileSpreadsheet, CheckCircle2, AlertTriangle, Building } from "lucide-react"

interface UploadComponentProps {
  onUploadSuccess?: () => void
}

interface UploadResult {
  success: boolean
  message: string
  totalAccounts?: number
  totalTrades?: number
  details?: Array<{
    action: string
    account: {
      id: string
      name: string
      accountNumber: string
    }
    tradesCount?: number
  }>
}

export function UploadComponent({ onUploadSuccess }: UploadComponentProps) {
  const [file, setFile] = React.useState<File | null>(null)
  const [uploading, setUploading] = React.useState(false)
  const [result, setResult] = React.useState<UploadResult | null>(null)
  const [error, setError] = React.useState<string>("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setResult(null)
      setError("")
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      setResult(null)
      setError("")
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleUpload = async () => {
    if (!file) {
      console.log('❌ No file selected')
      return
    }

    console.log('🚀 Starting upload:', file.name, file.size, 'bytes')
    setUploading(true)
    setError("")
    setResult(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      console.log('📤 Sending request to /api/upload')
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      console.log('📨 Response status:', response.status)
      const data = await response.json()
      console.log('📋 Response data:', data)

      if (response.ok) {
        console.log('✅ Upload successful')
        setResult(data)
        setFile(null)
        onUploadSuccess?.()
      } else {
        console.error('❌ Upload failed:', data.error)
        setError(data.error || 'Upload fehlgeschlagen')
      }
    } catch (error) {
      console.error('❌ Upload error:', error)
      setError('Ein Fehler ist aufgetreten')
    } finally {
      setUploading(false)
    }
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'created':
        return <Building className="h-4 w-4 text-success" />
      case 'imported_trades':
        return <FileSpreadsheet className="h-4 w-4 text-info" />
      case 'imported_summary':
        return <CheckCircle2 className="h-4 w-4 text-primary" />
      default:
        return <CheckCircle2 className="h-4 w-4" />
    }
  }

  const getActionText = (action: string, tradesCount?: number) => {
    switch (action) {
      case 'created':
        return 'Account erstellt'
      case 'imported_trades':
        return `${tradesCount} Trades importiert`
      case 'imported_summary':
        return 'Account Summary importiert'
      default:
        return action
    }
  }

  const getFileType = (filename: string) => {
    const ext = filename.toLowerCase().split('.').pop()
    switch (ext) {
      case 'eml': return 'Email (.eml)'
      case 'html':
      case 'htm': return 'HTML-Email'
      
      default: return 'Unbekannt'
    }
  }

  const getFileTypeDescription = (filename: string) => {
    const ext = filename.toLowerCase().split('.').pop()
    switch (ext) {
      case 'eml':
      case 'html':
      case 'htm': 
        return 'PU Prime Daily Confirmation Email'
      default: 
        return 'Trading-Dokument'
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CloudUpload className="h-5 w-5" />
            Smart Email Import
          </CardTitle>
          <CardDescription>
            Laden Sie Ihre Trading-Email hoch. Das System erkennt automatisch verschiedene Accounts und trennt die Trades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Upload Area */}
          <div
            className={`
              border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
              ${file 
                ? 'border-primary bg-primary/5' 
                : 'border-base-300 hover:border-primary hover:bg-base-200/50'
              }
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".eml,.html,.htm"
              onChange={handleFileChange}
              className="hidden"
            />
            
            {file ? (
              <div className="space-y-2">
                <CheckCircle2 className="h-12 w-12 text-success mx-auto" />
                <h3 className="text-lg font-medium">Datei ausgewählt</h3>
                <p className="text-sm text-base-content/60">{file.name}</p>
                <p className="text-xs text-base-content/40">
                  {(file.size / 1024).toFixed(1)} KB • {getFileType(file.name)}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <CloudUpload className="h-12 w-12 text-base-content/40 mx-auto" />
                <h3 className="text-lg font-medium">Trading-Datei hochladen</h3>
                <p className="text-sm text-base-content/60">
                  Ziehen Sie Ihre Trading-Datei hierher oder klicken Sie zum Auswählen
                </p>
                <p className="text-xs text-base-content/40">
                  Unterstützte Formate: .eml, .html, .htm
                </p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          {file && (
            <div className="mt-4">
              <Button
                onClick={handleUpload}
                disabled={uploading}
                className="btn btn-primary w-full"
              >
                {uploading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Verarbeitung läuft...
                  </>
                ) : (
                  <>
                    <CloudUpload className="h-4 w-4 mr-2" />
                    Smart Import starten
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mt-4 alert alert-error">
              <AlertTriangle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Results */}
          {result && result.success && (
            <div className="mt-6 space-y-4">
              <div className="alert alert-success">
                <CheckCircle2 className="h-4 w-4" />
                <div>
                  <h4 className="font-medium">Import erfolgreich!</h4>
                  <p className="text-sm">{result.message}</p>
                </div>
              </div>

              {/* Summary */}
              {(result.totalAccounts || result.totalTrades) && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="stat bg-base-200 rounded-lg p-4">
                    <div className="stat-title text-xs">Accounts</div>
                    <div className="stat-value text-2xl">{result.totalAccounts || 0}</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg p-4">
                    <div className="stat-title text-xs">Trades</div>
                    <div className="stat-value text-2xl">{result.totalTrades || 0}</div>
                  </div>
                </div>
              )}

              {/* Details */}
              {result.details && result.details.length > 0 && (
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Import Details:</h5>
                  {result.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                      {getActionIcon(detail.action)}
                      <div className="flex-1">
                        <div className="font-medium text-sm">{detail.account.name}</div>
                        <div className="text-xs text-base-content/60">
                          Account #{detail.account.accountNumber}
                        </div>
                      </div>
                      <div className="text-sm text-base-content/60">
                        {getActionText(detail.action, detail.tradesCount)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-info/10 border-info/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Building className="h-5 w-5 text-info mt-0.5" />
            <div>
              <h4 className="font-medium text-info">Multi-Format Import System</h4>
              <p className="text-sm text-info/80 mt-1">
                Das System unterstützt verschiedene Trading-Dokumente und erkennt automatisch 
                verschiedene Broker-Formate und Account-Nummern.
              </p>
              
              <div className="mt-3 space-y-2">
                <h5 className="font-medium text-info text-xs">Unterstützte Formate:</h5>
                <ul className="text-xs text-info/70 space-y-1">
                  <li>• <strong>PU Prime:</strong> Daily Confirmation Emails (.eml, .html)</li>
    
                  <li>• <strong>Gmail:</strong> Weitergeleitete Trading-Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 