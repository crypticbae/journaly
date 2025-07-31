"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Github, MessageCircle, Code, Coffee } from "lucide-react"

export function CreditsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          Credits & About
        </CardTitle>
        <CardDescription>
          Das Team hinter Journaly - by EFX24
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Developer */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border">
          <div className="flex items-center gap-4">
            <div className="avatar placeholder relative">
              <div 
                className="w-12 h-12 rounded-full shadow-lg border-2 border-white overflow-hidden transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl"
                style={{
                  backgroundImage: 'url(https://i.imgur.com/TURW5R6.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  animation: 'pulse 2s infinite'
                }}
              >
                {/* Overlay für cool effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Cool ring animation */}
              <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-purple-500/50 animate-ping"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Marcel aka bae</h3>
              <p className="text-sm text-base-content/70">Lead Developer & Creator</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  <Code className="h-3 w-3 mr-1" />
                  Full-Stack
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Coffee className="h-3 w-3 mr-1" />
                  Designer
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-2">
              <MessageCircle className="h-4 w-4 text-info" />
              <span className="text-sm font-mono bg-base-200 px-2 py-1 rounded">bae69</span>
            </div>
            <p className="text-xs text-base-content/60">Discord</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Github className="h-4 w-4" />
              Projekt
            </h4>
            <div className="text-sm text-base-content/70">
              <p><strong>Name:</strong> Journaly - by EFX24</p>
              <p><strong>Version:</strong> 2.0</p>
              <p><strong>Release:</strong> Januar 2025</p>
              <p><strong>Framework:</strong> Next.js 15 + React 19</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">Next.js</Badge>
              <Badge variant="secondary" className="text-xs">React</Badge>
              <Badge variant="secondary" className="text-xs">TypeScript</Badge>
              <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
              <Badge variant="secondary" className="text-xs">DaisyUI</Badge>
              <Badge variant="secondary" className="text-xs">Prisma</Badge>
              <Badge variant="secondary" className="text-xs">NextAuth.js</Badge>
              <Badge variant="secondary" className="text-xs">SQLite</Badge>
            </div>
          </div>
        </div>

        {/* Special Thanks */}
        <div className="p-4 bg-base-200 rounded-lg">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Heart className="h-4 w-4 text-red-500" />
            Special Thanks
          </h4>
          <div className="text-sm text-base-content/70 space-y-1">
            <p>• <strong>EFX24 Community</strong> - Feedback und Testing</p>
            <p>• <strong>Open Source Contributors</strong> - Libraries und Tools</p>
            <p>• <strong>Discord Community</strong> - Support und Ideas</p>
            <p>• <strong>Trading Community</strong> - Real-world Requirements</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center p-4 border-2 border-dashed border-base-300 rounded-lg">
          <div className="text-center">
            <MessageCircle className="h-8 w-8 text-info mx-auto mb-2" />
            <p className="text-sm font-medium">Questions? Feedback? Join us!</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-xs text-base-content/60">Contact</span>
              <span className="font-mono bg-base-200 px-2 py-1 rounded text-xs">bae69</span>
              <span className="text-xs text-base-content/60">on Discord</span>
            </div>
            <a 
              href="https://discord.gg/HnbSSMcqNv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline btn-info mt-3 gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Join Discord Server
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-base-300">
          <p className="text-xs text-base-content/60">
            © 2025 Journaly - by EFX24. Made with ❤️ by Marcel aka bae
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 