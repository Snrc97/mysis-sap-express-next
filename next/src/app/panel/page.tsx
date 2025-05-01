import { AuthProvider } from "@/app/context/AuthContext"
import Dashboard from "@/app/panel/dashboard/page"
import "@/styles/globals.css"

export default function Home() {

  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}