"use client";
import * as React from "react"
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
import { apiService } from "@/scripts/api-service"
import { setLocalCookie } from "@/scripts/nookies-cookies"
import UserAuthFormContainer from '../ui-custom/templates/panel/UserAuthFormContainer';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = {
  email: string
  password: string
  password_again: string
}

export function PanelUserAuthRegisterForm({ className }: UserAuthFormProps) {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formDto, setFormDto] = React.useState<FormData>({
    email: "",
    password: "",
    password_again: "",
  })

  async function onSubmit() {
    setIsLoading(true);
    let result = false;
    try {

      const signResult = await apiService.post("auth/register", formDto);
      result = signResult?.success ?? false;




      setTimeout(() => {
        const resultMsg_success = {
          color: "green",
          title: trans("common.success"),
          description: trans("common.process_successful", { process_name: trans("common.account.sign-up") }),
        }

        const resultMsg_fail = {
          color: "red",
          title: trans("common.error"),
          description: trans("common.process_failed", { process_name: trans("common.account.sign-up") }),
        }

        const resultMsg = result ? resultMsg_success : resultMsg_fail;

        toast({
          ...resultMsg,
          variant: "destructive",
        });


        if (result) {
          setLocalCookie("auth-token", signResult?.data?.token);
          window.location.reload();
        }
        setIsLoading(false);
      }, 1000);
    }
    catch (error) {
      console.error(error);
    }
    finally {

    

    }

  }

  return (

    <div className={cn("grid gap-6", className)}>
      <UserAuthFormContainer className={className} onSubmit={async () => await onSubmit()} type="sign-up" isLoading={isLoading}>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            {trans("common.account.labels.email")}
          </Label>
          <Input
            id="email"
            placeholder={trans("common.account.placeholders.email")}
            type="email"
            autoCapitalize="none"
            lang="tr"
            autoCorrect="off"
            disabled={isLoading}
            required
            onChange={(e) => setFormDto({ ...formDto, email: e.target.value })}
            value={formDto.email}
          />
          <Input
            id="password"
            security="false"
            placeholder={trans("common.account.placeholders.password")}
            type="text"
            autoCapitalize="none"
            lang="tr"
            autoCorrect="off"
            disabled={isLoading}
            required
            onChange={(e) => setFormDto({ ...formDto, password: e.target.value })}
            value={formDto.password}
          />
          <Input
            id="password_again"
            security="false"
            placeholder={trans("common.account.placeholders.password_again")}
            type="text"
            autoCapitalize="none"
            lang="tr"
            autoCorrect="off"
            disabled={isLoading}
            required
            onChange={(e) => setFormDto({ ...formDto, password_again: e.target.value })}
            value={formDto.password_again}
          />
          {/* {errors?.email && (
            <p className="px-1 text-xs text-red-600">
              {errors?.email.message}
            </p>
          )}
          {errors?.password && (
            <p className="px-1 text-xs text-red-600">
              {errors?.password.message}
            </p>
          )} */}
        </div>
      </UserAuthFormContainer>
    </div>
  )
}

