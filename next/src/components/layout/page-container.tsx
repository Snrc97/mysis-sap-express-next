import React from "react";
import AppSidebar from "./app-sidebar";
import Header from "./header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Footer from "./footer";


const PageContainer = ({ children, title }: any) => {
    return (
        <>
         <title>MYSIS SAP</title>
         <main className="flex flex-grow h-screen bg-gray-100 dark:bg-gray-800 p-6">
            <div>
                <AppSidebar />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <Header title="Dashboard" description="Yönetim Paneline Hosgeldiniz" />
                <Card>
                    <CardHeader>
                        <CardTitle>{title || ""}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
                <Footer />
            </div>
        </main>
        </>
       );
};

export default PageContainer;
