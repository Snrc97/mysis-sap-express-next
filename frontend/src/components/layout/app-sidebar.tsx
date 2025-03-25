"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarProvider,
} from "@/components/ui/sidebar";

import NestedSidebar from "@/components/ui-reusables/nested-sidebar";
import { Button } from "../ui/button";
import { destroyCookie } from "@/scripts/nookies-cookies";

// Menu items.
const items = [
    {
        title: "Yönetim Paneli",
        url: "/",
        icon: "dashboard",
    },
    {
        title: "Sipariş Yönetimi",
        icon: "order",
        isOpen: true,
        children: [
            {
                title: "Siparişler",
                url: "/panel/orders",
                icon: "table"
            }
        ]
    },
    // {
    //     title: "Satın Alma Talep Yönetimi",
    //     icon: "dollar",
    //     children: [
    //         {
    //             title: "Talepler",
    //             url: "#",
    //             icon: "dollar"
    //         }
    //     ]
    // },
    // {
    //     title: "Teklif Toplama ve Karşılaştırma",
    //     url: "#",
    //     icon: "search",
    // },
   
]

export default function AppSidebar() {


    const handleSignOut = () => {
       destroyCookie("auth-token");
       window.location.reload();
    }


    return (
        <SidebarProvider>

        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl font-bold">MYSIS SAP SHADCN UI</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="my-5">

                        <NestedSidebar items={items} />

                          
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex items-center justify-center p-4">
                    <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => handleSignOut()}
                    >
                        Çıkış
                    </Button>
                </div>

                <div className="flex items-center justify-center p-4">
                    <p className="text-sm text-gray-500">MYSIS SAP SHADCN UI</p>
                </div>
            </SidebarFooter>
        </Sidebar >
        </SidebarProvider>
    )
}
