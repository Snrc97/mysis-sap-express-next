import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import Icon from "@/components/ui-custom/Icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Icons } from '@/components/ui-reusables/icons';

type HeaderProps = {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {


  const headerButtons = [
    { title: "Ürünler", link: "#" },
    { title: "Projeler", link: "#" },
    { title: "Tüketici Grupları", link: "#" },
    { title: "Konular", link: "#" },
    { title: "Hizmetler", link: "#" },
    { title: "Şirket", link: "#" },
  ];

  return (
    <header className="flex flex-col">
      <div className='z-999 fixed top-0 bg-white h-16 flex flex-row w-full h-15 items-center justify-between   border-b border-gray-500'>

        <div className='w-[29.5%] h-full flex flex-row justify-end'>
          <div className='flex flex-col bg-green-600 h-full w-45 items-center justify-center'>
            <h1 className="text-gray-100 text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>


        <div className="w-[59%] h-full flex flex-row gap-5 items-center">
          <ul className='flex flex-row gap-5'>
            {
              headerButtons.map((button, index) => (
                <li className='text-nowrap' key={index}>
                  <Link href={button.link} className="text-gray-900 hover:text-gray-500 font-bold text-lg p-2 rounded relative transition-all">{button.title}</Link>
                </li>
              ))
            }


          </ul>
          <div className='flex flex-row gap-1 h-full justify-center items-center ml-[-10px]'>
            <div className='bg-green-700 text-white  h-[75%] w-11 flex justify-center items-center cursor-pointer'>
              <Icon name="search" size={23} className='rounded' />
            </div>
            <div className='bg-green-700 text-white  h-[75%] w-11 flex justify-center items-center cursor-pointer'>
              <Icon name="globe" size={23} className='rounded' />
            </div>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;

