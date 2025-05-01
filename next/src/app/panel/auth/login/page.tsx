"use client"
import { Metadata } from "next"
import Link from "next/link"

import { Icons } from "@/components/ui-reusables/icons"
import { UserAuthForm } from "@/components/ui-reusables/user-auth-form"
import { MysisProvider } from '@/components/context/MysisProvider'




export default function LoginPage() {
  return (
<MysisProvider>

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
              {trans("common.account.sign-in")}
            </h1>
            <p className="text-sm text-muted-foreground">
              {trans("common.account.labels.enter_email_to_sign_in")}
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/panel/auth/register"
              className="hover:text-brand underline underline-offset-4"
            >
              {trans("common.account.labels.dont_have_an_account") + " " + trans("common.account.sign-up")}
            </Link>
          </p>
        </div>
      </div>
      </MysisProvider>

  )
}
