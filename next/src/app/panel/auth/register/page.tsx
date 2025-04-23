import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui-reusables/icons"
import { UserAuthRegisterForm } from "@/components/ui-reusables/user-auth-register-form"

export const metadata = {
  title: "Hesap Oluştur",
  description: "Başlamak için bir hesap oluşturun.",
}

export default function RegisterPage() {



  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/panel/auth/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Giriş Yap
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Hesap Oluştur
            </h1>
            <p className="text-sm text-muted-foreground">
              Hesabınızı oluşturmak için aşağıdaki alana E-posta adresinizi girin
            </p>
          </div>
          <UserAuthRegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Devam&apos;a tıklayarak,{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Hizmet Şartları
            </Link>{" "}
            ve{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Gizlilik Politikası
            </Link>{" "}
            kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  )
}