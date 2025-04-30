import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import Icon from "@/components/ui-custom/Icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
const LanguageDropdown = dynamic(() => import('@/components/ui-custom/LanguageDropdown'), { ssr: false });

type HeaderProps = {
  title: string;
  description: string;
}

const Header: React.FC<any> = ({ title, description }: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-gray-800 flex items-center justify-between dark:bg-gray-900">
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>

      <div className="flex flex-row text-left gap-5">
    
    <LanguageDropdown/>
        <ThemeToggle />


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 w-20">
              <Button variant={"ghost"} className="relative h-12 w-6">
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
              </Button>
              <Icon name={"bell"} size={28} className="absolute" />

            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2">
            <DropdownMenuItem onClick={() => alert("New comment on your post")}>📩 New comment on your post</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("New friend request")}>👤 New friend request</DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Someone liked your photo")}>❤️ Someone liked your photo</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

    </header>
  );
};

export default Header;
