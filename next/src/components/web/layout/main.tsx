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

type MainLayoutProps = {
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    headerButtons?: HeaderButton[];
}

export default function MainLayout({
    title,
    description,
    children,
    className,
    headerButtons,
}: MainLayoutProps) {
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
            <Header description={description || ""} headerButtons={headerButtons}/>
            <main className={className + " my-16"}>
                {
                    title &&
                    <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }} 

                    
                    className='w-full h-20 flex flex-row items-center justify-center text-green-400 text-5xl border-b border-gray-200'>
                    <h1 className='mb-2'>
                        <span className="font-bold">{title}</span>
                    </h1>
                </motion.div>
                }
              
                {children}
            </main>
            <Footer />
        </motion.div>
    );
}
