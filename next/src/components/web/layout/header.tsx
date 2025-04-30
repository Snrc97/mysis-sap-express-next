"use client"
import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import Icon from "@/components/ui-custom/Icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Icons } from '@/components/ui-reusables/icons';
import { redirect, useRouter } from 'next/navigation';
import { motion } from "framer-motion";

import { loadAppLangs, setAppLang } from '@/helpers/extensions/server_helper';
import SignIn from '../popups/sign-in/component';
import LanguageDropdownList from '@/components/ui-custom/LanguageDropdownList';


export type HeaderButton = {
  title?: string;
  link?: string;
  onClick?: () => void;
  icon?: string;
  badge?: number;
  component?: () => React.JSX.Element;
}

type HeaderProps = {
  description: string;
  headerButtons?: HeaderButton[];
}

const Header: React.FC<HeaderProps> = ({ description, headerButtons = [] }) => {

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = React.useState<boolean>(false);

  const [searchInputVisible, setSearchInputVisible] = React.useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = React.useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = React.useState(false);

  const [scrollY, setScrollY] = React.useState(0);
  const [appLangs, setAppLangs] = React.useState<string[]>();

  const router = useRouter();

  const [isClient, setIsClient] = useState(false)



  useEffect(() => {
    setIsClient(true);

    (async () => {
      const serverAppLangs = await loadAppLangs();
      setAppLangs(serverAppLangs);
    })();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const searchInputComponent = () => {
    if (!searchInputVisible) {
      return <></>
    }

    return (

      <motion.div className='w-57 h-auto absolute mt-26 max-[1390px]:mt-20 min-[1390px]:ml-[150.5px] min-[1390px]:z-[-1]'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onBlur={() => setSearchInputVisible(false)}

      >
        <form className='flex flex-row items-center rounded-xl dark:bg-gray-800 border-2 border-gray-700' onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const searchQuery = formData.get('search') as string;
          redirect(`?search?q=${searchQuery}`);
        }}>
          <input id='search-input' type="text" name="search" className='w-full h-full outline-none text-black dark:text-white px-4' placeholder="Arama Yap" />


          <Button type="submit" variant={"secondary"} className='bg-green-700 cursor-pointer text-white' size={"icon"}>
            <Icon name="search" size={23} />
          </Button>

        </form>
      </motion.div>

    );
  }

  const languageDropdownComponent = () => {
    if (!languageDropdownVisible) {
      return <></>
    }


    return (
      <motion.div className='w-57 h-auto absolute mt-46 max-[1390px]:mt-38 min-[1390px]:ml-[5px] min-[1390px]:z-[-1]'
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1,y: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        onBlur={() => setLanguageDropdownVisible(false)}
      >
        <LanguageDropdownList />
      </motion.div>);
  }

  const loginPopupComponent = () => {
    if (!loginPopupVisible) {
      return <></>
    }
    return (
      <motion.div className='w-[550px] h-auto absolute mt-93 max-[1390px]:mt-87 max-[1390px]:ml-[118px] min-[1390px]:ml-[-168px] min-[1390px]:z-[-1]'
        initial={{ opacity: 0, y: -550 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <SignIn />
      </motion.div>
    );
  }



  headerButtons = [


    { title: trans("web.products"), link: "/web/products" },
    { title: trans("web.projects"), link: "#" },
    { title: trans("web.consumer_groups"), link: "#" },
    { title: trans("web.subjects"), link: "#" },
    { title: trans("web.services"), link: "#" },
    { title: trans("web.company"), link: "#" },
    ...headerButtons,
    {
      icon: "search", onClick: () => {
        handleSetSearchInputVisible();
      },
      component: searchInputComponent
    },
    {
      icon: "globe", onClick: () => {
        handleSetLanguageDropdownVisible();
      },
      component: languageDropdownComponent
    },
    {
      icon: "user", onClick: () => {
        handleSetLoginPopupVisible();
      },
      component: loginPopupComponent   
    },

  ];

  const handleSetHamburgerMenuOpen = (value?: boolean) => {
    setSearchInputVisible(false);
    setLanguageDropdownVisible(false);
    setLoginPopupVisible(false);
    console.log("hamburgerMenuOpen: ", hamburgerMenuOpen);
    setHamburgerMenuOpen(value || !hamburgerMenuOpen);
  }


  const handleSetSearchInputVisible = (value?: boolean) => {
    setLanguageDropdownVisible(false);
    setLoginPopupVisible(false);
    setSearchInputVisible(value || !searchInputVisible);
  }

  const handleSetLanguageDropdownVisible = (value?: boolean) => {
    setSearchInputVisible(false);
    setLoginPopupVisible(false);
    setLanguageDropdownVisible(value || !languageDropdownVisible);
  }

  const handleSetLoginPopupVisible = (value?: boolean) => {
    setSearchInputVisible(false);
    setLanguageDropdownVisible(false);
    setLoginPopupVisible(value || !loginPopupVisible);

  }


  return (
    <header className="flex flex-col">
      <div className='z-999 fixed top-0 h-16 flex flex-row w-full h-15 items-center justify-between border-b border-gray-500'>
        <Button variant={"default"}
          className='
          min-[1390px]:invisible
        max-[1390px]:visible
        absolute
        max-[1390px]:right-0
        mr-5
        cursor-pointer
        bg-green-600
        '
          onClick={() => handleSetHamburgerMenuOpen()}
        >
          <Icon name="menu" size={40} className='cursor-pointer rounded' color='#fff' />
        </Button>


        <div className='w-20 h-full flex flex-row justify-end mx-5 absolute cursor-pointer' onClick={() => {
          redirect("/");
        }}>
          <div className='flex flex-col bg-green-600 h-full w-full items-center justify-center'>
            <h1 className="text-gray-100 text-xl font-bold">{"MYSIS"}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div key={hamburgerMenuOpen ? 1 : 0} className={`
            flex
            dark:bg-gray-800
           absolute
             min-[1390px]:visible
            min-[1390px]:w-[100%]
            min-[1390px]:h-full
            min-[1390px]:flex-row 
            min-[1390px]:items-center
            max-[1390px]:flex-col 
            max-[1390px]:w-full 
            max-[1390px]:py-3 
            max-[1390px]:bg-gray-900 
            max-[1390px]:top-16
            ${!hamburgerMenuOpen && "max-[1390px]:invisible"}
           
            `}>
          <div className='h-full w-full flex flex-col justify-center'>





            <ul className='min-[1390px]:flex gap-4 min-[1390px]:flex-row max-[1390px]:flex-column max-[1390px]:mx-auto max-[1390px]:w-50 flex-wrap w-full h-full justify-end px-3 py-3 items-center'>

              <li>
                {isClient && window?.location?.pathname !== "/" && <Button variant={"default"} className='h-full flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600' onClick={() => router.back()}>
                  <Icon name="ArrowLeft" size={40} className='bg-green-700 cursor-pointer rounded bg-transparent' />
                </Button>}

              </li>

              {
                headerButtons?.map((button, index) => (

                  <li className='text-nowrap h-full flex flex-row items-center justify-center' key={index}>
                    {
                      !button.icon ?
                        button.link &&
                        <Link href={button.link} className="
                      h-full 
                      flex 
                      items-center 
                      justify-center 
                      max-[1390px]:text-gray-300
                      max-[1390px]:
                      font-bold 
                      text-lg 
                      px-2
                      rounded 
                      relative 
                      transition-all
                      hover:text-gray-700
                      dark:hover:text-gray-400
                      hover:scale-105
                      ">{button.title}</Link>
                        : // if the header button is icon-button
                        <Button
                          id={'header-button-' + index}
                          className='bg-green-700 hover:bg-green-800 text-white h-[80%] w-15 max-[1390px]:w-[100%] max-[1390px]:my-6 flex flex-row items-center justify-center cursor-pointer'
                          onClick={(e) => {
                            if (button.onClick) {
                              button.onClick();
                            }
                            if (button.link) {
                              router.push(button.link);
                            }
                          }}
                        >

                          <Icon name={button.icon} size={23} className='rounded' />
                          {
                            button.badge
                            &&
                            <div className='bg-red-500 text-white rounded-full text-[12px] font-bold w-7 h-7 flex items-center justify-center absolute ml-9 mb-8 '>{button.badge}</div>}

                        </Button>
                    }
                    {
                      button?.component &&
                      button.component()
                    }
                  </li>

                ))
              }




            </ul>



          </div>


          <div className='hidden fixed flex flex-row gap-1 h-auto w-[670px] top-16 bg-red-500'>
            <div className='h-50 w-full'>

            </div>
          </div>




        </div>





      </div>



    </header >
  );
};

export default Header;
