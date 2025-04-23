export { };
import * as translations from '@/lang/tr/all.json';

declare global {
    interface String {
        toUpperCaseFirst(): string;
        toLowerCaseFirst(): string;
    }


    interface ArrayConstructor {
        toPluckFromEnum(enm: any): any
    }

    var trans: (key: keyof typeof translations, args?: { [key: string]: string }) => string;



}

global.trans = (key: string, args?: { [key: string]: string }) => {
    let translation: any = "";
    let current: any = translations;
    const keys = key.split('.');
    if (keys.length > 1) {
      
       
        for (let i = 0; i < keys.length - 1; i++) {
            const k = keys[i];
            if (current[k] === undefined) {
                return key;
            }
            current = current[k];
        }
        translation = current[keys[keys.length - 1]];
        
    }
    else
    {
         translation = current[key];
        if (translation === undefined) {
            return "*"+key+"*";
        }
    }

    if (args) {
        Object.keys(args).forEach((argKey) => {
            translation = translation.replace(`:${argKey}`, args[argKey]);
        });
    }

 

    return translation;
};

String.prototype.toUpperCaseFirst = function (this: string): string {
    if (this.length === 0) return this;
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toLowerCaseFirst = function (this: string): string {
    if (this.length === 0) return this;
    return this.charAt(0).toLowerCase() + this.slice(1);
};



Array.toPluckFromEnum = function (enm: any) {
    return Object.entries(enm).map(([key, value]) => ({
        value: key,
        label: value,
    }));
}