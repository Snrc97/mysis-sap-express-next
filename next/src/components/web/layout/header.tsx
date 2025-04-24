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

import { appLangs, setAppLang } from '@/helpers/extensions/all';


export type HeaderButton = {
  title: string;
  link: string;
  icon?: string;
  badge?: number;
}

type HeaderProps = {
  title: string;
  description: string;
  headerButtons?: HeaderButton[];
}

const Header: React.FC<HeaderProps> = ({ title, description, headerButtons }) => {

  const [open, setOpen] = React.useState(false);

  const [searchInputVisible, setSearchInputVisible] = React.useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = React.useState(false);

  const [cartBasketItems, setCartBasketItems] = React.useState([]);

  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  headerButtons = headerButtons || [
    { title: trans("web.products"), link: "/web/products" },
    { title: trans("web.projects"), link: "#" },
    { title: trans("web.consumer_groups"), link: "#" },
    { title: trans("web.subjects"), link: "#" },
    { title: trans("web.services"), link: "#" },
    { title: trans("web.company"), link: "#" },
  ];


  const handleSetSearchInputVisible = (value?: boolean) => {
    setSearchInputVisible(value || !searchInputVisible);
  }

  const handleSetLanguageDropdownVisible = (value?: boolean) => {
    setLanguageDropdownVisible(value || !languageDropdownVisible);
  }

  const handleClickAuthButton = () => {

  }


  return (
    <header className="flex flex-col">
      <div className='z-11 fixed top-0 h-16 flex flex-row w-full h-15 items-center justify-between border-b border-gray-500'>

        <div className='w-20 h-full flex flex-row justify-end mx-5 absolute cursor-pointer' onClick={() => {
          redirect("/");
        }}>
          <div className='flex flex-col bg-green-600 h-full w-full items-center justify-center'>
            <h1 className="text-gray-100 text-xl font-bold">{title}</h1>
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
    
            min-[1390px]:w-[100%]
            min-[1390px]:h-full
            min-[1390px]:flex-row 
            min-[1390px]:top-0
    
            min-[1390px]:flex
            
            transition-all
             
            ${scrollY !== 0 ? "bg-green-100/75" : "bg-white"}
            gap-5 
            items-center 
            `}>
            <div className='h-full w-full flex flex-col justify-center'>
              <ul className='min-[1390px]:flex gap-4 min-[1390px]:flex-row max-[1390px]:flex-column flex-wrap w-full h-full justify-end px-3 py-3 items-center'>
                {
                  headerButtons?.map((button, index) => (

                    <li className='text-nowrap h-full flex flex-row items-center' key={index}>
                      {
                        !button.icon ?
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
                          :
                          <Button variant={"default"}
                            id={'header-button-' + index}
                            className='bg-green-700 text-white h-[80%] w-15 flex justify-center items-center cursor-pointer'
                            onClick={(e) => {
                              redirect(button.link);
                            }}
                          >

                            <Icon name={button.icon} size={23} className='rounded z-999' />
                            {
                              button.badge
                              &&
                              <div className='bg-red-500 text-white rounded-full text-[12px] font-bold w-7 h-7 flex items-center justify-center absolute ml-9 mb-8 '>{button.badge}</div>}

                          </Button>
                      }
                    </li>

                  ))
                }
                <li className='text-nowrap h-full flex flex-row items-center'>
                  <Button variant={"default"}
                    id='search-button'
                    className='bg-green-700 text-white h-[80%] w-15 flex justify-center items-center cursor-pointer'
                    onClick={(e) => handleSetSearchInputVisible()}
                  >
                    <Icon name="search" size={23} className='rounded' />
                  </Button>
                </li>
                <li className='text-nowrap h-full flex flex-row items-center'>
                  <Button variant={"default"}
                    className='bg-green-700 text-white h-[80%] w-15 flex justify-center items-center cursor-pointer'
                    onClick={(e) => handleSetLanguageDropdownVisible()}
                  >
                    <Icon name="globe" size={23} className='rounded' />
                  </Button>
                </li>

                <li className='text-nowrap h-full flex flex-row items-center'>
                  <Button variant={"default"}
                    className='bg-green-700 text-white h-[80%] w-15 flex justify-center items-center cursor-pointer'
                    onClick={handleClickAuthButton}
                  >
                    <Icon name="User" size={23} className='rounded' />
                  </Button>
                </li>

              </ul>

            </div>


            <div className='hidden absolute flex flex-row gap-1 h-auto w-[670px] top-16 bg-red-500'>
              <div className='h-50 w-full'>

              </div>
            </div>


          </div>

        }

        <Button variant={"default"} className='
        min-[1390px]:hidden
        max-[1390px]:flex
        absolute
        max-[1390px]:right-0
        mr-5
        cursor-pointer
        bg-green-700
        '

          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" size={40} className='
          bg-green-700 cursor-pointer rounded
          ' color='#fff' />
        </Button>


      </div>

      <div className='absolute max-[1390px]:z-999 min-[1390px]:z-10 flex flex-row gap-1 h-auto w-auto top-16 right-0'
      >
        {
          searchInputVisible &&
          <motion.div className={'h-10 w-56 border-1 border-gray-700 rounded flex flex-row items-center justify-between'}
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
              <input id='search-input' type="text" name="search" className='w-full h-full outline-none text-black px-4' placeholder="Arama Yap" />


              <Button type="submit" variant={"secondary"} className='bg-green-700 cursor-pointer text-white' size={"icon"}>
                <Icon name="search" size={23} />
              </Button>

            </form>
          </motion.div>
        }

        {
          languageDropdownVisible &&
          <motion.div className={'h-auto w-56 bg-gray-500/50'}
            onBlur={() => setLanguageDropdownVisible(false)}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}

          >
            <ul className='flex flex-col gap-2 p-2'>
              {
                appLangs.map(lang => (
                  <li key={lang} onClick={() => setAppLang(lang)}>
                    <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-200 rounded'>
                      <Icon name={lang} size={25} className='h-full w-full' />
                      <span>{trans(`common.${lang}_dropdown`)}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </motion.div>
        }

      </div>

    </header >
  );
};

export default Header;

