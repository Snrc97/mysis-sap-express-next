import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui-custom/Icon";
import { appLang, appLangs, setAppLang } from '@/helpers/extensions/all';


export default function LanguageDropdown() {

    // const [_appLang, _setAppLang] = React.useState(appLang);
    // const [_appLangs, _setAppLangs] = React.useState(appLangs);

    // const handleSetAppLang = (lang: string) => {
    //     _setAppLang(lang);
    //     setAppLang(lang);
    // }

    return <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='flex flex-row items-center justify-center relative'>
                    <Button variant="ghost" className="flex items-center gap-2">
                        <Icon name={"globe"} size={20} />
                        <span className="text-lg">{trans("common." + appLang + "_dropdown")}</span>
                        <ChevronDown size={20} className="text-lg" />
                    </Button>
                </div>

            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-2 w-48">
                {
                    appLangs.map((lang) => (lang != appLang &&
                        <DropdownMenuItem key={lang} onClick={() => setAppLang(lang)}>
                            <span className="text-lg">{trans("common." + lang + "_dropdown")}</span>
                        </DropdownMenuItem>
                    ))
                }

            </DropdownMenuContent>
        </DropdownMenu>

    </div>;
};
