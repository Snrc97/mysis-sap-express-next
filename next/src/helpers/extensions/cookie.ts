import { cookies } from "next/headers";

const setCookie = async (name: string, value: string, options: { [key: string]: any }) => {
    await cookies().then(async co => {
        co.set(name, value, options);
    });
}

const getCookie = async (name: string): Promise<string> => {
    return await cookies().then(async co => {
        const cookie = co.get(name);
        if (cookie) {
            return cookie.value;
        }

        return "";

    });

}

export { setCookie, getCookie }