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
import { setCookie } from "@/scripts/nookies-cookies"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> ;

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);



  async function onSubmit(dto: FormData) {
    // setIsLoading(true)
    let result = false;
    try {

      const signInResult = await apiService.post("auth/login", dto);
      result = signInResult?.success ?? false;

      
    
     
      setTimeout(() => {
        // setIsLoading(false);

        const resultMsg_success = {
          color: "green",
          title: trans("common.success"),
          description: trans("common.process_successful", { process_name: trans("common.account.sign-in") }),
        }
  
        const resultMsg_fail = {
          color: "red",
          title: trans("common.error"),
          description: trans("common.process_failed", { process_name: trans("common.account.sign-in") }),
        }
  
        const resultMsg = result ? resultMsg_success : resultMsg_fail;
  
          toast({
            ...resultMsg,
            variant: "destructive",
          });
  

        if(result)
        {
          setCookie("auth-token", signInResult?.data?.token);
          window.location.reload();
        }
      }, 1000);
    }
    catch (error) {
      console.error(error)
    }
    finally {



      return true;
    }

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {trans("common.account.labels.email")}
            </Label>
            <Input
              id="email"
              placeholder={trans("common.account.labels.email")}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              lang="tr"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              required
              {...register("email")}
            />
            <Input
              id="password"
              security="false"
              placeholder={trans("common.account.labels.password")}
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              lang="tr"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              required
              {...register("password")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors?.email.message}
              </p>
            )}
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors?.password.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {trans("common.account.sign-in")}
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {trans("common.account.labels.continue_if_no_any")}
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

