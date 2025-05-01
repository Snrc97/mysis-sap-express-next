"use client"
import { PanelUserAuthRegisterForm } from "@/components/ui-reusables/panel-user-auth-register-form"
import PanelAuthView from '@/components/ui-custom/templates/panel/PanelAuthView'
import { MysisProvider } from '@/components/context/MysisProvider'

export default function RegisterPage() {



  return (
<MysisProvider> 
<PanelAuthView type="sign-up"><PanelUserAuthRegisterForm /></PanelAuthView>
</MysisProvider>
  )
}