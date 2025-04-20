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

import NestedSidebar, { NestedSidebarItem } from "@/components/ui-reusables/nested-sidebar";
import { Button } from "../ui/button";
import { destroyCookie } from "@/scripts/nookies-cookies";

// Menu items.
const items : NestedSidebarItem[] = [
    {
        title: "Yönetim Paneli",
        icon: "home",
        url: "/",
    },
    {
        title: "Oturum Yönetimi",
        icon: "key",
        isOpen: false,
        children: [
            {
                title: "Kullanıcılar",
                url: "/",
                icon: "table",
            },
            {
                title: "Roller",
                url: "/",
                icon: "table",
            },
        ]
    },
    {
        title: "Bayilik ve Müşteri Yönetimi",
        icon: "building",
        isOpen: false,
        children: [
            {
                title: "Bayiler",
                icon: "store",
                url: "/panel/dealers",
            },
            {
                title: "Müşteriler",
                icon: "users",
                url: "/panel/customers",
            }
        ]
    },
    {
        title: "Sipariş Yönetimi",
        icon: "CreditCard",
        isOpen: false,
        children: [
           
            {
                title: "Siparişler",
                icon: "table",
                url: "/panel/orders",
            },
        ]
    },
    {
        title: "Teklif Yönetimi",
        icon: "user",
        isOpen: false,
        children: [
           
            {
                title: "Teklifler",
                icon: "table",
                url: "/",
            },
        ]
    },
    {
        title: "Lojistik ve İhracat Yönetimi",
        icon: "truck",
        isOpen: false,
        children: [
            {
                title: "Lojistik",
                icon: "table",
                url: "/",
            },
        ]
    },
    
    {
        title: "Stok ve Ürün Yönetimi",
        icon: "box",
        isOpen: false,
        children: [
            {
                title: "Ürünler",
                icon: "table",
                url: "/panel/products",
            },
            {
                title: "Stoklar",
                icon: "table",
                url: "/panel/stocks",
            },
        ]
    },
    {
        title: "Veri Tabanı Yönetimi",
        icon: "database",
        isOpen: false,
        children: [
            {
                title: "Veri Tabanları",
                icon: "table",
                url: "/panel/databases",
            },
        ]
    },
    {
        title: "Bildirim Yönetimi",
        icon: "bell",
        isOpen: false,
        children: [
            {
                title: "Bildirimler",
                url: "/",
                icon: "table",
            },
        ]
    },
    {
        title: "Api Entegrasyonları",
        icon: "code",
        isOpen: false,
        children: [
            {
                title: "Entegrasyonlar",
                url: "/",
                icon: "table",
            },
        ]
    },
   
   
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
