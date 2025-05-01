"use client"
import { Metadata } from "next"
import Link from "next/link"

import { Icons } from "@/components/ui-reusables/icons"
import { PanelUserAuthLoginForm } from "@/components/ui-reusables/panel-user-auth-login-form"
import { MysisProvider } from '@/components/context/MysisProvider'
import PanelAuthView from '@/components/ui-custom/templates/panel/PanelAuthView'




export default function LoginPage() {
  return (
<MysisProvider> 
<PanelAuthView type="sign-in"><PanelUserAuthLoginForm /></PanelAuthView>
</MysisProvider>

  )
}
