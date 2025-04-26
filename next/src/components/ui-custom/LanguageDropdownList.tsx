"use client";
import React, { useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui-custom/Icon";
import { appLang as loadAppLang, loadAppLangs, setAppLang as serverSetAppLang } from '@/helpers/extensions/server_helper';
import { useRouter } from 'next/navigation';

const fetchLangs = async (setAppLang: (lang: string) => void, setAppLangs: (lang: string[]) => void) => {
    const _appLang = await loadAppLang();
    const _appLangs = await loadAppLangs();
    setAppLang(_appLang);
    setAppLangs(_appLangs);
}

export default function LanguageDropdownList() {

    const router = useRouter();
    const [appLang, setAppLang] = React.useState<string>();
    const [appLangs, setAppLangs] = React.useState<string[]>([]);

    useEffect(() => {

        fetchLangs(setAppLang, setAppLangs);

    }, []);


    const handleSetAppLang = async (lang: string) => {
        await serverSetAppLang(lang);
        fetchLangs(setAppLang, setAppLangs);
        window.location.reload();
    }


    return (
        <ul className='flex flex-col gap-2 p-2 bg-green-800 border-2 border-gray-900 rounded'>
            {
                appLangs?.map(lang => (
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
