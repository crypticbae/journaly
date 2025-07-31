"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Lock, CheckCircle2, AlertTriangle } from "lucide-react"

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Aktuelles Passwort ist erforderlich"),
  newPassword: z.string().min(8, "Neues Passwort muss mindestens 8 Zeichen lang sein"),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwörter stimmen nicht überein",
  path: ["confirmPassword"]
})

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

export function ChangePasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitMessage, setSubmitMessage] = React.useState<{type: 'success' | 'error', text: string} | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema)
  })

  const onSubmit = async (data: ChangePasswordFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Passwort erfolgreich geändert!' })
        reset() // Clear form
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Fehler beim Ändern des Passworts' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Netzwerkfehler. Bitte versuche es erneut.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Passwort ändern
        </CardTitle>
        <CardDescription>
          Ändere dein Passwort für mehr Sicherheit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Current Password */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Aktuelles Passwort</span>
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Gib dein aktuelles Passwort ein"
                className={`input input-bordered w-full pr-10 ${errors.currentPassword ? 'input-error' : ''}`}
                {...register("currentPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4 text-base-content/40" />
                ) : (
                  <Eye className="h-4 w-4 text-base-content/40" />
                )}
              </button>
            </div>
            {errors.currentPassword && (
              <span className="text-error text-sm">{errors.currentPassword.message}</span>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Neues Passwort</span>
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Gib ein neues Passwort ein (min. 8 Zeichen)"
                className={`input input-bordered w-full pr-10 ${errors.newPassword ? 'input-error' : ''}`}
                {...register("newPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4 text-base-content/40" />
                ) : (
                  <Eye className="h-4 w-4 text-base-content/40" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <span className="text-error text-sm">{errors.newPassword.message}</span>
            )}
          </div>

          {/* Confirm New Password */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Neues Passwort bestätigen</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Wiederhole das neue Passwort"
                className={`input input-bordered w-full pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-base-content/40" />
                ) : (
                  <Eye className="h-4 w-4 text-base-content/40" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-error text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {submitMessage.type === 'success' ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <AlertTriangle className="h-4 w-4" />
              )}
              <span>{submitMessage.text}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Passwort wird geändert...
              </>
            ) : (
              'Passwort ändern'
            )}
          </Button>
        </form>

        {/* Security Tips */}
        <div className="mt-6 p-4 bg-base-200 rounded-lg">
          <h4 className="font-medium text-sm mb-2">💡 Sicherheitstipps:</h4>
          <ul className="text-xs text-base-content/70 space-y-1">
            <li>• Verwende mindestens 8 Zeichen</li>
            <li>• Kombiniere Buchstaben, Zahlen und Sonderzeichen</li>
            <li>• Verwende kein Passwort, das du bereits anderswo nutzt</li>
            <li>• Teile dein Passwort niemals mit anderen</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
} 