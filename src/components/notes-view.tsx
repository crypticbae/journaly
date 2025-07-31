"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Pin, 
  PinOff, 
  Heart,
  Brain,
  TrendingUp,
  TrendingDown,
  Calendar,
  Tag,
  Link2,
  BookOpen,
  Star,
  MessageSquare,
  Filter,
  X
} from "lucide-react"
import { TradeDetailsModal } from "./trade-details-modal"

interface TradeNote {
  id: string
  tradeId?: string
  userId: string
  title: string
  content: string
  convictionBefore?: number  // 1-10
  emotionAfter?: number      // 1-10
  category?: string
  tags?: string
  isPrivate: boolean
  isPinned: boolean
  createdAt: string
  updatedAt: string
  
  // Trade relation
  trade?: {
    id: string
    ticket: string
    instrument: string
    type: string
    profit: number
    openTime: string
  }
}

interface NotesViewProps {
  notes: TradeNote[]
  trades: Array<{
    id: string
    ticket: string
    instrument: string
    type: string
    profit: number
    openTime: string
    size: number
    price: number
    exitPrice?: number
  }>
}

export function NotesView({ trades }: NotesViewProps) {
  const [notes, setNotes] = React.useState<TradeNote[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isCreating, setIsCreating] = React.useState(false)
  const [editingNote, setEditingNote] = React.useState<TradeNote | null>(null)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [categoryFilter, setCategoryFilter] = React.useState("all")
  const [showOnlyPinned, setShowOnlyPinned] = React.useState(false)
  const [showOnlyTradeLinked, setShowOnlyTradeLinked] = React.useState(false)
  
  // Trade Details Modal
  const [selectedTrade, setSelectedTrade] = React.useState<any>(null)
  const [isTradeModalOpen, setIsTradeModalOpen] = React.useState(false)

  // Form state
  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    convictionBefore: "",
    emotionAfter: "",
    category: "",
    tags: "",
    tradeId: "",
    isPrivate: false,
    isPinned: false
  })

  // Load notes on component mount
  React.useEffect(() => {
    loadNotes()
  }, [])

  const loadNotes = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/notes')
      
      if (response.ok) {
        const data = await response.json()
        setNotes(data.notes || [])
        console.log('📝 Loaded notes:', data.notes?.length || 0)
      } else {
        console.error('Failed to load notes:', response.statusText)
        setNotes([])
      }
    } catch (error) {
      console.error('Error loading notes:', error)
      setNotes([])
    } finally {
      setIsLoading(false)
    }
  }

  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = new Set(notes.map(note => note.category).filter(Boolean))
    return Array.from(cats).sort()
  }, [notes])

  // Filter notes
  const filteredNotes = React.useMemo(() => {
    return notes.filter(note => {
      const matchesSearch = searchTerm === "" || 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = categoryFilter === "all" || note.category === categoryFilter
      const matchesPinned = !showOnlyPinned || note.isPinned
      const matchesTradeLinked = !showOnlyTradeLinked || note.tradeId

      return matchesSearch && matchesCategory && matchesPinned && matchesTradeLinked
    })
  }, [notes, searchTerm, categoryFilter, showOnlyPinned, showOnlyTradeLinked])

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      convictionBefore: "",
      emotionAfter: "",
      category: "",
      tags: "",
      tradeId: "",
      isPrivate: false,
      isPinned: false
    })
  }

  const handleCreate = () => {
    setIsCreating(true)
    setEditingNote(null)
    resetForm()
  }

  const handleEdit = (note: TradeNote) => {
    setEditingNote(note)
    setIsCreating(false)
    setFormData({
      title: note.title,
      content: note.content,
      convictionBefore: note.convictionBefore?.toString() || "",
      emotionAfter: note.emotionAfter?.toString() || "",
      category: note.category || "",
      tags: note.tags || "",
      tradeId: note.tradeId || "",
      isPrivate: note.isPrivate,
      isPinned: note.isPinned
    })
  }

  const handleCancel = () => {
    setIsCreating(false)
    setEditingNote(null)
    resetForm()
  }

  const handleSave = async () => {
    try {
      // Validation
      if (!formData.title.trim() || !formData.content.trim()) {
        alert('Titel und Inhalt sind erforderlich!')
        return
      }

      const requestData = {
        title: formData.title.trim(),
        content: formData.content.trim(),
        tradeId: formData.tradeId || null,
        convictionBefore: formData.convictionBefore ? parseInt(formData.convictionBefore) : null,
        emotionAfter: formData.emotionAfter ? parseInt(formData.emotionAfter) : null,
        category: formData.category.trim() || null,
        tags: formData.tags.trim() || null,
        isPrivate: formData.isPrivate,
        isPinned: formData.isPinned
      }

      let response
      if (editingNote) {
        // Update existing note
        response = await fetch('/api/notes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: editingNote.id, ...requestData })
        })
      } else {
        // Create new note
        response = await fetch('/api/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        })
      }

      if (response.ok) {
        const data = await response.json()
        console.log('✅ Note saved:', data.note?.id)
        
        // Reload notes to reflect changes
        await loadNotes()
        handleCancel()
        
        alert(editingNote ? 'Notiz erfolgreich aktualisiert!' : 'Notiz erfolgreich erstellt!')
      } else {
        const errorData = await response.json()
        alert(`Fehler: ${errorData.error || 'Unbekannter Fehler'}`)
      }
    } catch (error) {
      console.error('Error saving note:', error)
      alert('Fehler beim Speichern der Notiz')
    }
  }

  const handleDelete = async (noteId: string) => {
    if (!confirm("Notiz wirklich löschen?")) return
    
    try {
      const response = await fetch(`/api/notes?id=${noteId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        console.log('✅ Note deleted:', noteId)
        await loadNotes()
        alert('Notiz erfolgreich gelöscht!')
      } else {
        const errorData = await response.json()
        alert(`Fehler: ${errorData.error || 'Fehler beim Löschen'}`)
      }
    } catch (error) {
      console.error('Error deleting note:', error)
      alert('Fehler beim Löschen der Notiz')
    }
  }

  const togglePin = async (noteId: string) => {
    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'toggle-pin' })
      })

      if (response.ok) {
        console.log('✅ Note pin toggled:', noteId)
        await loadNotes()
      } else {
        const errorData = await response.json()
        console.error('Pin toggle failed:', errorData.error)
      }
    } catch (error) {
      console.error('Error toggling pin:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "text-success"
    if (rating >= 6) return "text-warning"
    if (rating >= 4) return "text-info"
    return "text-error"
  }

  const getRatingEmoji = (rating: number, type: 'conviction' | 'emotion') => {
    if (type === 'conviction') {
      if (rating >= 8) return "🎯"
      if (rating >= 6) return "👍"
      if (rating >= 4) return "🤔"
      return "❓"
    } else {
      if (rating >= 8) return "😊"
      if (rating >= 6) return "🙂"
      if (rating >= 4) return "😐"
      return "😞"
    }
  }

  const handleTradeClick = (tradeId: string) => {
    const trade = trades.find(t => t.id === tradeId)
    if (trade) {
      // Erweitere das Trade-Objekt mit Standard-Werten wenn sie fehlen
      const fullTrade = {
        ...trade,
        // Behalte das originale exitPrice vom Trade
        exitPrice: trade.exitPrice, // Verwende das echte exitPrice
        size: trade.size || 1, // Verwende originale size oder Fallback
        commission: 0,
        fee: 0, 
        swap: 0,
        comment: undefined,
        entry: 'out' // Standardwert
      }
      setSelectedTrade(fullTrade)
      setIsTradeModalOpen(true)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <span className="ml-2">Lade Notizen...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Notizen gesamt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notes.length}</div>
            <p className="text-xs text-base-content/60">{filteredNotes.length} gefiltert</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Durchschn. Emotionslage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {notes.filter(n => n.emotionAfter).length > 0 
                ? (
                  <>
                    {(notes.reduce((sum, n) => sum + (n.emotionAfter || 0), 0) / notes.filter(n => n.emotionAfter).length).toFixed(1)}
                    <span className="text-xl">
                      {(() => {
                        const avgEmotion = notes.reduce((sum, n) => sum + (n.emotionAfter || 0), 0) / notes.filter(n => n.emotionAfter).length;
                        if (avgEmotion >= 8) return "😊";
                        if (avgEmotion >= 6) return "🙂";
                        if (avgEmotion >= 4) return "😐";
                        return "😞";
                      })()}
                    </span>
                  </>
                ) 
                : '-'
              }
            </div>
            <p className="text-xs text-base-content/60">nach Trades</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Angepinnt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notes.filter(n => n.isPinned).length}</div>
            <p className="text-xs text-base-content/60">wichtige Notizen</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Durchschn. Überzeugung</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {notes.filter(n => n.convictionBefore).length > 0 
                ? (
                  <>
                    {(notes.reduce((sum, n) => sum + (n.convictionBefore || 0), 0) / notes.filter(n => n.convictionBefore).length).toFixed(1)}
                    <span className="text-xl">
                      {(() => {
                        const avgConviction = notes.reduce((sum, n) => sum + (n.convictionBefore || 0), 0) / notes.filter(n => n.convictionBefore).length;
                        if (avgConviction >= 8) return "🎯";
                        if (avgConviction >= 6) return "👍";
                        if (avgConviction >= 4) return "🤔";
                        return "❓";
                      })()}
                    </span>
                  </>
                ) 
                : '-'
              }
            </div>
            <p className="text-xs text-base-content/60">vor Trades</p>
          </CardContent>
        </Card>
      </div>



      {/* Filters & Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Trading Notizen</CardTitle>
              <CardDescription>Verwalte deine Trading-Notizen und Bewertungen</CardDescription>
            </div>
            <Button onClick={handleCreate} className="btn btn-primary gap-2">
              <Plus className="h-4 w-4" />
              Neue Notiz
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-base-content/60" />
                <Input
                  placeholder="Suche in Notizen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-[200px]">
              <select 
                className="select select-bordered w-full"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Alle Kategorien</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Toggle Filters */}
            <div className="flex gap-2">
              <button
                className={`btn btn-sm ${showOnlyPinned ? 'btn-warning' : 'btn-outline'}`}
                onClick={() => setShowOnlyPinned(!showOnlyPinned)}
              >
                <Pin className="h-4 w-4" />
                Angepinnt
              </button>
              <button
                className={`btn btn-sm ${showOnlyTradeLinked ? 'btn-info' : 'btn-outline'}`}
                onClick={() => setShowOnlyTradeLinked(!showOnlyTradeLinked)}
              >
                <Link2 className="h-4 w-4" />
                Mit Trade
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || categoryFilter !== "all" || showOnlyPinned || showOnlyTradeLinked) && (
            <div className="border-t border-base-300 pt-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-base-content/70">Aktive Filter:</span>
                
                {searchTerm && (
                  <div className="badge badge-ghost gap-2">
                    Suche: "{searchTerm}"
                    <X className="h-3 w-3 cursor-pointer hover:text-error" onClick={() => setSearchTerm("")} />
                  </div>
                )}
                
                {categoryFilter !== "all" && (
                  <div className="badge badge-ghost gap-2">
                    Kategorie: {categoryFilter}
                    <X className="h-3 w-3 cursor-pointer hover:text-error" onClick={() => setCategoryFilter("all")} />
                  </div>
                )}
                
                {showOnlyPinned && (
                  <div className="badge badge-warning gap-2">
                    Nur angepinnt
                    <X className="h-3 w-3 cursor-pointer hover:text-error" onClick={() => setShowOnlyPinned(false)} />
                  </div>
                )}
                
                {showOnlyTradeLinked && (
                  <div className="badge badge-info gap-2">
                    Nur mit Trade
                    <X className="h-3 w-3 cursor-pointer hover:text-error" onClick={() => setShowOnlyTradeLinked(false)} />
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Form */}
      {(isCreating || editingNote) && (
        <Card>
          <CardHeader>
            <CardTitle>{editingNote ? 'Notiz bearbeiten' : 'Neue Notiz erstellen'}</CardTitle>
            <CardDescription>
              {editingNote ? 'Bearbeite deine Trading-Notiz' : 'Erstelle eine neue Trading-Notiz mit Bewertungen'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text">Titel *</span>
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Notiz-Titel..."
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Kategorie</span>
                </label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="z.B. Strategie, Psychologie..."
                />
              </div>
            </div>

            {/* Trade Link */}
            <div>
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Link2 className="h-4 w-4" />
                  Mit Trade verknüpfen (optional)
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.tradeId}
                onChange={(e) => setFormData(prev => ({ ...prev, tradeId: e.target.value }))}
              >
                <option value="">Kein Trade ausgewählt</option>
                {trades.map(trade => (
                  <option key={trade.id} value={trade.id}>
                    {trade.ticket} - {trade.instrument} ({trade.type.toUpperCase()}) - {formatCurrency(trade.profit)}
                  </option>
                ))}
              </select>
            </div>

            {/* Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Überzeugung vor Trade (1-10)
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={formData.convictionBefore}
                  onChange={(e) => setFormData(prev => ({ ...prev, convictionBefore: e.target.value }))}
                >
                  <option value="">Nicht bewertet</option>
                  {Array.from({length: 10}, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>
                      {num} - {num >= 8 ? 'Sehr hoch' : num >= 6 ? 'Hoch' : num >= 4 ? 'Mittel' : 'Niedrig'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Gefühlslage nach Trade (1-10)
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={formData.emotionAfter}
                  onChange={(e) => setFormData(prev => ({ ...prev, emotionAfter: e.target.value }))}
                >
                  <option value="">Nicht bewertet</option>
                  {Array.from({length: 10}, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>
                      {num} - {num >= 8 ? 'Sehr positiv' : num >= 6 ? 'Positiv' : num >= 4 ? 'Neutral' : 'Negativ'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="label">
                <span className="label-text">Notiz-Inhalt *</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Was möchtest du zu diesem Trade notieren?"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags (komma-getrennt)
                </span>
              </label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                placeholder="tag1, tag2, tag3..."
              />
            </div>

            {/* Settings */}
            <div className="flex gap-4">
              <label className="cursor-pointer label gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={formData.isPinned}
                  onChange={(e) => setFormData(prev => ({ ...prev, isPinned: e.target.checked }))}
                />
                <span className="label-text">Anpinnen</span>
              </label>
              <label className="cursor-pointer label gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary"
                  checked={formData.isPrivate}
                  onChange={(e) => setFormData(prev => ({ ...prev, isPrivate: e.target.checked }))}
                />
                <span className="label-text">Privat</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <Button onClick={handleSave} className="btn btn-primary">
                {editingNote ? 'Speichern' : 'Erstellen'}
              </Button>
              <Button onClick={handleCancel} className="btn btn-outline">
                Abbrechen
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notes List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredNotes.map((note) => (
          <Card key={note.id} className={`${note.isPinned ? 'ring-2 ring-warning' : ''}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {note.isPinned && <Pin className="h-4 w-4 text-warning" />}
                    {note.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-base-content/60">
                      {formatDate(note.createdAt)}
                    </span>
                    {note.category && (
                      <Badge variant="outline" className="text-xs">
                        {note.category}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => togglePin(note.id)}
                  >
                    {note.isPinned ? <PinOff className="h-3 w-3" /> : <Pin className="h-3 w-3" />}
                  </button>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleEdit(note)}
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                  <button
                    className="btn btn-ghost btn-xs text-error"
                    onClick={() => handleDelete(note.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Ratings */}
              {(note.convictionBefore || note.emotionAfter) && (
                <div className="mb-3 space-y-2">
                  <div className="flex gap-4 p-2 bg-base-200 rounded-lg">
                    {note.convictionBefore && (
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-primary" />
                        <span className="text-sm">Überzeugung:</span>
                        <span className={`font-bold ${getRatingColor(note.convictionBefore)}`}>
                          {note.convictionBefore}/10 {getRatingEmoji(note.convictionBefore, 'conviction')}
                        </span>
                      </div>
                    )}
                    {note.emotionAfter && (
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-error" />
                        <span className="text-sm">Emotion:</span>
                        <span className={`font-bold ${getRatingColor(note.emotionAfter)}`}>
                          {note.emotionAfter}/10 {getRatingEmoji(note.emotionAfter, 'emotion')}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Individual Trade Tip */}
                  {note.convictionBefore && note.emotionAfter && (
                    <div className={`p-2 rounded text-xs text-base-content ${(() => {
                      const conviction = note.convictionBefore!;
                      const emotion = note.emotionAfter!;
                      
                      if (conviction >= 7 && emotion >= 7) {
                        return "bg-success/10 border border-success/30";
                      } else if (conviction >= 7 && emotion < 5) {
                        return "bg-warning/10 border border-warning/30";
                      } else if (conviction < 5 && emotion >= 7) {
                        return "bg-info/10 border border-info/30";
                      } else if (conviction < 5 && emotion < 5) {
                        return "bg-error/10 border border-error/30";
                      } else {
                        return "bg-base-300 border border-base-300";
                      }
                    })()}`}>
                      {(() => {
                        const conviction = note.convictionBefore!;
                        const emotion = note.emotionAfter!;
                        
                        if (conviction >= 7 && emotion >= 7) {
                          return "🚀 Starker Trade! Hohe Überzeugung + positive Emotion = repliziere diese Setups!";
                        } else if (conviction >= 7 && emotion < 5) {
                          return "🎯 Gute Analyse, schlechtes Ergebnis. Das passiert - Strategie beibehalten!";
                        } else if (conviction < 5 && emotion >= 7) {
                          return "🍀 Glückstreffer! Arbeite an deiner Analyse für nachhaltigen Erfolg.";
                        } else if (conviction < 5 && emotion < 5) {
                          return "⚠️ Unsichere Analyse + negatives Ergebnis. Setup überdenken!";
                        } else if (conviction >= 6 && emotion >= 5) {
                          return "✅ Solider Trade. Gut analysiert und akzeptables Ergebnis.";
                        } else if (conviction < 6 && emotion >= 6) {
                          return "💡 Gutes Ergebnis trotz unsicherer Analyse. Mehr Selbstvertrauen!";
                        } else {
                          return "📊 Dokumentiere mehr Details für bessere Analyse.";
                        }
                      })()}
                    </div>
                  )}
                </div>
              )}

              {/* Trade Link */}
              {note.trade && (
                <div className="mb-3 p-2 bg-info/10 border border-info/20 rounded-lg">
                  <div 
                    className="flex items-center gap-2 text-sm cursor-pointer hover:bg-info/20 rounded p-1 transition-colors"
                    onClick={() => handleTradeClick(note.trade!.id)}
                    title="Klicken für Trade-Details"
                  >
                    <Link2 className="h-4 w-4 text-info" />
                    <span className="font-medium hover:underline">{note.trade.ticket}</span>
                    <span>-</span>
                    <span className="hover:underline">{note.trade.instrument}</span>
                    <Badge variant={note.trade.type === 'buy' ? 'default' : 'secondary'}>
                      {note.trade.type.toUpperCase()}
                    </Badge>
                    <span className={`font-bold ${note.trade.profit >= 0 ? 'text-success' : 'text-error'}`}>
                      {formatCurrency(note.trade.profit)}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <p className="text-sm text-base-content/80 whitespace-pre-wrap mb-3">
                {note.content}
              </p>

              {/* Tags */}
              {note.tags && (
                <div className="flex flex-wrap gap-1">
                  {note.tags.split(',').map((tag, index) => (
                    <Badge key={index} variant="ghost" className="text-xs">
                      #{tag.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotes.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <BookOpen className="h-12 w-12 mx-auto text-base-content/30 mb-4" />
            <h3 className="text-lg font-medium text-base-content/70 mb-2">
              {notes.length === 0 ? 'Noch keine Notizen' : 'Keine Notizen gefunden'}
            </h3>
            <p className="text-base-content/50 mb-4">
              {notes.length === 0 
                ? 'Erstelle deine erste Trading-Notiz mit Bewertungen'
                : 'Versuche andere Filterkriterien'
              }
            </p>
            {notes.length === 0 && (
              <Button onClick={handleCreate} className="btn btn-primary gap-2">
                <Plus className="h-4 w-4" />
                Erste Notiz erstellen
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Trade Details Modal */}
      <TradeDetailsModal
        trade={selectedTrade}
        isOpen={isTradeModalOpen}
        onClose={() => {
          setIsTradeModalOpen(false)
          setSelectedTrade(null)
        }}
      />
    </div>
  )
} 