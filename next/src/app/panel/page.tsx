import { AuthProvider } from "@/app/context/AuthContext"
import Dashboard from "@/app/panel/dashboard/page"
import { MysisProvider } from '@/components/context/MysisProvider';
import "@/styles/globals.css"

export default function Home() {

  return (
    <MysisProvider>
      <Dashboard />
    </MysisProvider>
  );
}