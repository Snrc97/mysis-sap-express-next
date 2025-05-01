"use client";
import React, { useEffect } from "react";
import Icon from "@/components/ui-custom/Icon";
import MysisContext, { MysisContextProps } from '../context/MysisProvider';


export default function LanguageDropdownList() {

    const { setCurrentAppLang, appLangs } = React.useContext<any>(MysisContext);



    const handleSetAppLang = async (lang: string) => {
        setCurrentAppLang(lang);
        // window.location.reload();
    }


    return (
        <ul className='flex flex-col gap-2 p-2 bg-green-800 border-2 border-gray-900 rounded'>
            {
                appLangs?.map((lang: string) => (
                    <li key={lang} onClick={() => handleSetAppLang(lang)}>
                        <div className='flex flex-row items-center justify-center gap-2 cursor-pointer hover:bg-green-900 rounded'>
                            <Icon name={lang} size={25} className='h-full w-full' />
                            <span className='text-lg text-gray-100 font-bold'>{trans(`common.${lang}_dropdown`)}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};
