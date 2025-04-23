import Image from "next/image";
import { PageProvider } from "@/hooks/use-page";
import { AuthProvider } from "@/app/context/AuthContext";
import Dashboard from "@/app/panel/dashboard/page";
import "@/styles/globals.css";



export default function Home() {


  return (
    <PageProvider value={undefined}>
      <AuthProvider>
          <Dashboard />
      </AuthProvider>

    </PageProvider>
  );
}
