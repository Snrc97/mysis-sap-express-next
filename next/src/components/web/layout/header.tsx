import React, { useEffect } from "react";
import ThemeToggle from "@/components/theme-toggle";
import Icon from "@/components/ui-custom/Icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Icons } from '@/components/ui-reusables/icons';
import { redirect } from 'next/navigation';
import { motion } from "framer-motion";

type HeaderProps = {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {

  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const [focusIncrement, setFocusIncrement] = React.useState(0);

  const [searchInputVisible, setSearchInputVisible] = React.useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = React.useState(false);

  const headerButtons = [
    { title: "Ürünler", link: "#" },
    { title: "Projeler", link: "#" },
    { title: "Tüketici Grupları", link: "#" },
    { title: "Konular", link: "#" },
    { title: "Hizmetler", link: "#" },
    { title: "Şirket", link: "#" },
  ];

  const handleSetSearchInputVisible = () => {
    setSearchInputVisible(!searchInputVisible);
  }

  const handleSetLanguageDropdownVisible = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  }

  const handleClickAuthButton = () => {

  }


  return (
    <header key={focusIncrement} className="flex flex-col">
      <div className='z-11 fixed top-0 bg-white h-16 flex flex-row w-full h-15 items-center justify-between   border-b border-gray-500'>

        <div className='w-25 h-full flex flex-row justify-end mx-5 cursor-pointer' onClick={() => {
          redirect("/");
        }}>
          <div className='flex flex-col bg-green-600 h-full w-full items-center justify-center'>
            <h1 className="text-gray-100 text-2xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>

        {
          <div onBlur={() => setOpen(false)} className={`
            max-[1390px]:${open ? "flex" : "hidden"}
            max-[1390px]:w-[190px] 
            max-[1390px]:pl-3 
            max-[1390px]:py-3 
            max-[1390px]:absolute 
            max-[1390px]:bg-gray-900 
            max-[1390px]:right-0 
            max-[1390px]:flex-col 
            max-[1390px]:top-16
           
     
    
            min-[1390px]:w-[59%]
            min-[1390px]:h-full
            min-[1390px]:flex-row 
            min-[1390px]:top-0
    
            min-[1390px]:flex
            
            transition-all
             
            gap-5 
            items-center 
            `}>
            <div className='h-full w-auto flex flex-col justify-center'>
              <ul className='min-[1390px]:flex gap-5 min-[1390px]:flex-row max-[1390px]:flex-column'>
                {
                  headerButtons.map((button, index) => (
                    <li className='text-nowrap' key={index}>
                      <Link href={button.link} className="
                      min-[1390px]:text-gray-900 
                      min-[1390px]:hover:text-gray-500
                      max-[1390px]:text-gray-500 
                      max-[1390px]:hover:text-gray-400 
                      font-bold 
                      text-lg 
                      p-2 
                      rounded 
                      relative 
                      transition-all
                      ">{button.title}</Link>
                    </li>
                  ))
                }


              </ul>

              <div className='hidden absolute flex flex-row gap-1 h-auto w-[670px] top-16 bg-red-500'>
                <div className='h-50 w-full'>

                </div>
              </div>
            </div>

            <div className='flex flex-row gap-1 h-full justify-center items-center ml-[-10px]'>
              <Button variant={"secondary"} className='bg-green-700 text-white  h-[75%] w-11 flex justify-center items-center cursor-pointer'
                onClick={(e) => handleSetSearchInputVisible()}
              >
                <Icon name="search" size={23} className='rounded' />
              </Button>
              <Button variant={"secondary"} className='bg-green-700 text-white  h-[75%] w-11 flex justify-center items-center cursor-pointer'>
                <Icon name="globe" size={23} className='rounded'
                  onClick={(e) => handleSetLanguageDropdownVisible()} />
              </Button>
              <Button variant={"secondary"} className='bg-green-700 text-white  h-[75%] w-11 flex justify-center items-center cursor-pointer'>
                <Icon name="User" size={23} className='rounded' onClick={handleClickAuthButton} />
              </Button>
            </div>



          </div>

        }

        <Button variant={"secondary"} className='
        min-[1390px]:hidden
        max-[1390px]:flex
        mr-5
        cursor-pointer
        bg-green-700
        '

        onClick={() => setOpen(!open)}
        >
          <Icon name="menu" size={40} className='
          bg-green-700 cursor-pointer rounded
          ' color='#fff'  />
        </Button>


      </div>

      <div className='absolute max-[1390px]:z-999 min-[1390px]:z-10 flex flex-row gap-1 h-auto w-auto top-16 right-0'
      >
        {
          searchInputVisible &&
          <motion.div className={'h-10 w-56'}
            onBlur={() => setSearchInputVisible(false)}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}

          >
            <form className='flex flex-row items-center rounded bg-white' onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const searchQuery = formData.get('search') as string;
              redirect(`?search?q=${searchQuery}`);
            }}>
              <input id='search-input' autoFocus type="text" name="search" className='w-full outline-none text-black px-4 ' placeholder="Arama Yap" />


              <Button type="submit" variant={"link"} className='h-[40px] w-[50px] bg-green-700 cursor-pointer text-white' size={"icon"}>
                <div className=' flex flex-row justify-center items-center rounded hover:bg-green-800'>
                  <Icon name="search" size={23} className='h-full w-full' />
                </div>
              </Button>

            </form>
          </motion.div>
        }

        {
          languageDropdownVisible &&
          <motion.div className={'h-10 w-56 bg-red-500'}
            onBlur={() => setLanguageDropdownVisible(false)}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}

          >
            <form className='flex flex-row items-center rounded bg-white' onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const searchQuery = formData.get('search') as string;
              redirect(`?search?q=${searchQuery}`);
            }}>


              <Button type="submit" variant={"link"} className='h-[40px] w-[50px] bg-green-700 cursor-pointer text-white' size={"icon"}>
                <div className=' flex flex-row justify-center items-center rounded hover:bg-green-800'>
                  <Icon name="search" size={23} className='h-full w-full' />
                </div>
              </Button>

            </form>
          </motion.div>
        }

      </div>

    </header>
  );
};

export default Header;

