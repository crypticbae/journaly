"use client"

import * as React from "react"
import { signIn, getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  password: z.string().min(1, "Passwort ist erforderlich")
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSwitchToRegister?: () => void
}

export function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string>("")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false
      })

      if (result?.error) {
        setError("Ungültige Anmeldedaten oder Account nicht genehmigt")
      } else {
        // Check session and redirect
        const session = await getSession()
        if (session) {
          router.push("/dashboard")
          router.refresh()
        }
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
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <LogIn className="h-6 w-6 text-primary-content" />
          </div>
        </div>
        <CardTitle className="text-2xl">Anmelden</CardTitle>
        <CardDescription>
          Melden Sie sich bei Journaly an
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
                placeholder="Ihr Passwort"
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

          <Button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Anmelden...
              </>
            ) : (
              "Anmelden"
            )}
          </Button>
        </form>

        <div className="divider">oder</div>

        <div className="text-center">
          <p className="text-sm text-base-content/60">
            Noch kein Account?{" "}
            <button 
              onClick={onSwitchToRegister}
              className="link link-primary"
            >
              Registrieren
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 