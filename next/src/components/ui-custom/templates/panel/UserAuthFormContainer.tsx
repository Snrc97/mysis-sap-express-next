"use client";
import * as React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui-reusables/icons"
import { UserAuthType } from './PanelAuthView';


interface UserAuthFormProps {
  className?: string;
  onSubmit : () => Promise<void>;
  type: UserAuthType;
  children: React.ReactNode;
  isLoading: boolean;
};



 function UserAuthFormContainer({ className, children, onSubmit, type, isLoading }: UserAuthFormProps) {


  return (
    <div className={cn("grid gap-6", className)}>
      <form onSubmit={async (e) => { e.preventDefault(); await onSubmit(); }}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            {
              children
            }
          </div>
          <button className={cn(buttonVariants()) + " cursor-pointer"} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {trans("common.account."+type)}
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

    </div>
  )
}

export default UserAuthFormContainer;