import React from "react";
import ThemeToggle from "../theme-toggle";

type HeaderProps = {
  title: string;
  description: string;
}

const Header: React.FC<any> = ({ title, description }: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between">
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>

      <ThemeToggle />
    </header>
  );
};

export default Header;
