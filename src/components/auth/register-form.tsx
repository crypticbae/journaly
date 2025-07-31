"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff, UserPlus, AlertCircle, CheckCircle } from "lucide-react"

const registerSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  password: z.string().min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwörter stimmen nicht überein",
  path: ["confirmPassword"]
})

type RegisterFormData = z.infer<typeof registerSchema>

interface RegisterFormProps {
  onSwitchToLogin?: () => void
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string>("")
  const [success, setSuccess] = React.useState<string>("")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password
        })
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Registrierung fehlgeschlagen")
      } else {
        setSuccess(result.message)
        // Auto-switch to login after 3 seconds
        setTimeout(() => {
          onSwitchToLogin?.()
        }, 3000)
      }
    } catch (error) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
            <UserPlus className="h-6 w-6 text-secondary-content" />
          </div>
        </div>
        <CardTitle className="text-2xl">Registrieren</CardTitle>
        <CardDescription>
          Erstellen Sie einen neuen Account für Journaly
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="alert alert-error">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {success && (
            <div className="alert alert-success">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <Input
              type="text"
              placeholder="Ihr vollständiger Name"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <Input
              type="email"
              placeholder="deine.email@domain.com"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Passwort</span>
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Mindestens 8 Zeichen"
                className={`input input-bordered w-full pr-10 ${errors.password ? 'input-error' : ''}`}
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-error text-sm">{errors.password.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="label">
              <span className="label-text">Passwort bestätigen</span>
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Passwort wiederholen"
                className={`input input-bordered w-full pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-error text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          <Button
            type="submit"
            className="btn btn-secondary w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Registrieren...
              </>
            ) : (
              "Account erstellen"
            )}
          </Button>
        </form>

        {/* Admin Approval Notice */}
        <div className="mt-6 p-4 bg-warning/20 border border-warning/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
            <div>
              <h4 className="font-medium text-sm text-warning-content">
                Admin-Bestätigung erforderlich
              </h4>
              <p className="text-xs text-warning-content/80 mt-1">
                Ihr Account muss von einem Administrator genehmigt werden, bevor Sie sich anmelden können.
              </p>
            </div>
          </div>
        </div>

        <div className="divider">oder</div>

        <div className="text-center">
          <p className="text-sm text-base-content/60">
            Bereits einen Account?{" "}
            <button 
              onClick={onSwitchToLogin}
              className="link link-primary"
            >
              Anmelden
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 