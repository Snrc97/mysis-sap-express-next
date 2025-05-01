"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui-reusables/icons"


export type UserAuthType = "sign-in" | "sign-up";

type PanelAuthViewProps = {
    children: React.ReactNode;
    type: UserAuthType;
};

export default function PanelAuthView({children, type}: PanelAuthViewProps) {


    const authTypeOtherInverse = type === "sign-in" ? "register" : "login";

    const typeInverse = type === "sign-in" ? "sign-up" : "sign-in";

    const hasGrid = type === "sign-up";

    const gridClass = hasGrid ? "grid-cols-2" : "grid-cols-1";


  return (
    
    <div className={"container grid "+gridClass+" h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:px-0"}>
      <title>
        {
          ("MYSIS SAP - " + (type === "sign-up" ? trans("common.account.create") : trans("common.account.sign-in")))
        }
      </title>
      <Link
        href={"/panel/auth/"+authTypeOtherInverse}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        
       {trans("common.account."+typeInverse)}
      </Link>
      {
        hasGrid &&
        <div className="hidden h-full bg-muted lg:block" />
      
      }
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              {
                type === "sign-up" ? trans("common.account.create") : trans("common.account.sign-in")
              }
            </h1>
            <p className="text-sm text-muted-foreground">
              {
                type === "sign-up" ? trans("common.account.labels.fill_fields_below_to_sign_up") : trans("common.account.labels.enter_email_to_sign_in")}
            </p>
          </div>
          {
            children
          }
          <p className="px-8 text-center text-sm text-muted-foreground">
           {trans("common.account.labels.by_continuing") + " "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              {trans("common.account.service_terms")}
            </Link>{" "}
            {trans("common.and")}{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              {trans("common.account.privacy_policy")}
            </Link>{" "}
            {trans("common.account.you_agree")}
          </p>
        </div>
      </div>
    </div>
  )
}