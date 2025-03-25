import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui-reusables/icons"
import { UserAuthForm } from "@/components/ui-reusables/user-auth-form"


export const metadata: Metadata = {
  title: "Giriş Yap",
  description: "Hesabınıza giriş yapın",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col mx-auto items-center justify-center">
      {/* <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Geri
        </>
      </Link> */}
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Tekrar hoş geldiniz
          </h1>
          <p className="text-sm text-muted-foreground">
            Hesabınıza giriş yapmak için e-posta adresinizi girin
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/panel/auth/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Hesabınız yok mu? Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  )
}
