import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/web/layout/footer";
import Header, { HeaderButton } from "@/components/web/layout/header";
import AppSidebar from "@/components/layout/app-sidebar";

const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

export default function MainLayout({
    title,
    description,
    children,
    className,
    headerButtons 
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    headerButtons?: HeaderButton[]
}) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="flex flex-col min-h-screen bg-white"
        >
            <Header title={title} description={description || ""} headerButtons={headerButtons}/>
            <main className={className}>
                {children}
            </main>
            <Footer />
        </motion.div>
    );
}
