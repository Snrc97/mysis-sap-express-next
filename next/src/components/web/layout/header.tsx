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
  title?: string;
  link?: string;
  onClick?: () => void;
  icon?: string;
  badge?: number;
}

type HeaderProps = {
  description: string;
  headerButtons?: HeaderButton[];
}

const Header: React.FC<HeaderProps> = ({ description, headerButtons = [] }) => {

  const [open, setOpen] = React.useState<boolean>(false);

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
      }
    },
    {
      icon: "globe", onClick: () => {
        handleSetLanguageDropdownVisible();
      }
    },
    {
      icon: "user", onClick: () => {
        handleClickAuthButton();
      }
    },

  ];


  const handleSetSearchInputVisible = (value?: boolean) => {
    setLanguageDropdownVisible(false);
    setSearchInputVisible(value || !searchInputVisible);
  }

  const handleSetLanguageDropdownVisible = (value?: boolean) => {
    setSearchInputVisible(false);
    setLanguageDropdownVisible(value || !languageDropdownVisible);
  }

  const handleClickAuthButton = () => {

  }


  return (
    <header className="flex flex-col">
      <div className='z-3 fixed top-0 h-16 flex flex-row w-full h-15 items-center justify-between border-b border-gray-500'>
        <Button variant={"default"}
          id="responsive-hamburger-menu-button"
          className='
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


        <div className='w-20 h-full flex flex-row justify-end mx-5 absolute cursor-pointer' onClick={() => {
          redirect("/");
        }}>
          <div className='flex flex-col bg-green-600 h-full w-full items-center justify-center'>
            <h1 className="text-gray-100 text-xl font-bold">{"MYSIS"}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>

      

        {
          <div className={`
            max-[1390px]:${open ? "flex" : "hidden"}
            max-[1390px]:w-full 
            max-[1390px]:pl-3 
            max-[1390px]:py-3 
            max-[1390px]:fixed 
            max-[1390px]:bg-gray-900 
            max-[1390px]:right-0 
            max-[1390px]:top-16

            max-[1390px]:flex-col 
    
            min-[1390px]:w-[100%]
            min-[1390px]:h-full
            min-[1390px]:flex-row 
    
            min-[1390px]:flex
            
            transition-all
             
            ${scrollY !== 0 ? "bg-green-100/75" : "bg-white"}
            gap-5 
            items-center 
            `}>
            <div className='h-full w-full flex flex-col justify-center'>




              <ul className='min-[1390px]:flex gap-4 min-[1390px]:flex-row max-[1390px]:flex-column max-[1390px]:mx-auto max-[1390px]:w-50 flex-wrap w-full h-full justify-end px-3 py-3 items-center'>
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
                                redirect(button.link);
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

        }




      </div>

      {
          <div className={'z-2 max-[1390px]:z-999 h-auto w-53 max-[1390px]:w-43 rounded text-nowrap flex flex-row items-center justify-start fixed mt-16 max-[1390px]:mt-79 min-[1390px]:right-3 max-[1390px]:ml-141'}


          >
            {
              searchInputVisible &&
              <motion.div className='w-full h-full max-[1390px]:mt-0 absolute '
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onBlur={() => setSearchInputVisible(false)}

              >
                <form className='flex flex-row items-center rounded-xl bg-white border-2 border-gray-700' onSubmit={(e) => {
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

              <motion.div className='w-full h-full max-[1390px]:mt-38 absolute rounded'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onBlur={() => setLanguageDropdownVisible(false)}
              >
                <ul className='flex flex-col gap-2 p-2 bg-green-800 border-2 border-gray-900 rounded'>
                  {
                    appLangs.map(lang => (
                      <li key={lang} onClick={() => setAppLang(lang)}>
                        <div className='flex flex-row items-center justify-center gap-2 cursor-pointer hover:bg-green-900 rounded'>
                          <Icon name={lang} size={25} className='h-full w-full' />
                          <span className='text-lg text-gray-100 font-bold'>{trans(`common.${lang}_dropdown`)}</span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </motion.div>
            }

          </div>
        }

    </header >
  );
};

export default Header;

