"use client";
import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/ui-reusables/icons"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>

function UserAuthRegisterFormComponent() {
  const searchParams = useSearchParams();
  const ref = searchParams?.get("from");

  return ref || "/";
}


export function UserAuthRegisterForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);





  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: UserAuthRegisterFormComponent()
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: "Bir hata oluştu.",
        description: "Giriş isteğiniz başarısız oldu. Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    }

    return toast({
      title: "E-postanızı kontrol edin",
      description:
        "Size giriş bağlantısı gönderdik. Lütfen spam klasörünü de kontrol edin.",
    })
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              E-posta
            </Label>
            <Input
              id="email"
              placeholder="E-posta Adresinizi girin"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              lang="tr"
              autoCorrect="off"
              required
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            <Input
              id="password"
              name="password"

              placeholder="Şifrenizi girin"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              lang="tr"
              autoCorrect="off"
              required
              disabled={isLoading || isGitHubLoading}
            />
            <Input
              id="password_repeat"
              name="password_repeat"
              placeholder="Şifrenizi Tekrar girin"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              lang="tr"
              autoCorrect="off"
              required
              disabled={isLoading || isGitHubLoading}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Giriş Yap
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Yoksa devam edin
          </span>
        </div>
      </div>
      {/* <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true)
          signIn("github")
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github ile giriş yap
      </button> */}
    </div>
  )
}

