"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Building2, X, CheckCircle, AlertCircle } from "lucide-react"

const createAccountSchema = z.object({
  name: z.string().min(1, "Account-Name ist erforderlich"),
  description: z.string().optional(),
  accountNumber: z.string().min(1, "Account-Nummer ist erforderlich"),
  brokerName: z.string().optional(),
  currency: z.string().default("USD"),
  isDefault: z.boolean().optional()
})

type CreateAccountFormData = z.infer<typeof createAccountSchema>

interface CreateAccountModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function CreateAccountModal({ isOpen, onClose, onSuccess }: CreateAccountModalProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string>("")
  const [success, setSuccess] = React.useState<string>("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      currency: "USD"
    }
  })

  React.useEffect(() => {
    if (!isOpen) {
      reset()
      setError("")
      setSuccess("")
    }
  }, [isOpen, reset])

  const onSubmit = async (data: CreateAccountFormData) => {
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Fehler beim Erstellen des Accounts")
      } else {
        setSuccess(result.message)
        setTimeout(() => {
          onSuccess()
          onClose()
        }, 1500)
      }
    } catch (error) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-content" />
              </div>
              <div>
                <CardTitle>Neuer Trading-Account</CardTitle>
                <CardDescription>
                  Erstellen Sie einen neuen Trading-Account
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="btn btn-ghost btn-sm btn-circle"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
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
                <span className="label-text">Account-Name *</span>
              </label>
              <Input
                type="text"
                placeholder="z.B. Hauptkonto, Live Account"
                className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-error text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="label">
                <span className="label-text">Account-Nummer *</span>
              </label>
              <Input
                type="text"
                placeholder="z.B. 12345678"
                className={`input input-bordered w-full ${errors.accountNumber ? 'input-error' : ''}`}
                {...register("accountNumber")}
              />
              {errors.accountNumber && (
                <span className="text-error text-sm">{errors.accountNumber.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="label">
                <span className="label-text">Broker-Name</span>
              </label>
              <Input
                type="text"
                placeholder="z.B. XM, IC Markets, FTMO"
                className="input input-bordered w-full"
                {...register("brokerName")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="label">
                  <span className="label-text">Währung</span>
                </label>
                <select 
                  className="select select-bordered w-full"
                  {...register("currency")}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CHF">CHF</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="label">
                  <span className="label-text">Standard-Account</span>
                </label>
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-2">
                    <input 
                      type="checkbox" 
                      className="checkbox checkbox-primary"
                      {...register("isDefault")}
                    />
                    <span className="label-text text-sm">Als Standard festlegen</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="label">
                <span className="label-text">Beschreibung</span>
              </label>
              <textarea
                placeholder="Optionale Beschreibung des Accounts"
                className="textarea textarea-bordered w-full"
                rows={2}
                {...register("description")}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="btn btn-outline flex-1"
                disabled={isLoading}
              >
                Abbrechen
              </Button>
              <Button
                type="submit"
                className="btn btn-primary flex-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Erstellen...
                  </>
                ) : (
                  "Account erstellen"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 