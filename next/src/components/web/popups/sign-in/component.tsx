'use client'
import MysisContext, { MysisContextProps } from '@/components/context/MysisProvider'
import { ButtonSpinner } from '@/components/ui-custom/ButtonSpinner'
import Icon from '@/components/ui-custom/Icon'
import { apiService } from '@/scripts/api-service'
import { setLocalCookie } from '@/scripts/nookies-cookies'
import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [hasLoggedIn, setHasLoggedIn] = useState(false);


    const { handleWithAsyncrousLoading } : MysisContextProps = useContext(MysisContext);

    useEffect(() => {
        setHasLoggedIn(checkHasLoggedIn());

    }, []);

    // alert(hasLoggedIn);

    const handleLogout = async () => {
        localStorageRemoveItem('auth-token');
        setHasLoggedIn(checkHasLoggedIn());
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

      
        if (!hasLoggedIn) {
            const tryLogin = async () => await handleWithAsyncrousLoading?.(handleLogin) ?? await handleLogin();
            await tryLogin();
        }
        else {
            const tryLogout = async () => await handleWithAsyncrousLoading?.(handleLogout) ?? await handleLogout();
            await tryLogout();
        }
    }

    const handleLogin = async () => {
        const dto = {
            email, password
        }

        const res = await apiService.post('auth/login', dto);
        Swal.fire(res?.msg || '', '', res?.success == true ? 'success' : 'error');
        if (res.success) {
            const data = res.data;
            const token = data.token;
            setLocalCookie('auth-token', token);
            setHasLoggedIn(checkHasLoggedIn());
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-auto h-auto bg-white dark:bg-gray-600 rounded-lg shadow-lg">

                {
                    hasLoggedIn &&
                    <div className='flex flex-row w-[400px] h-auto mt-[-152px] items-center justify-center'>
                        <ButtonSpinner className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 my-3 rounded-lg transition-colors duration-200">
                            <Icon name="door" size={23} />
                            <span className="ml-2">{trans("common.account.sign-out")}</span>
                        </ButtonSpinner>
                    </div>
                }
                {
                    !hasLoggedIn &&
                    <div className="flex flex-col gap-2 w-[400px] h-full items-start justify-center p-8">




                        <label className="block mb-2 font-bold" htmlFor="email">{trans("common.account.email")}:</label>
                        <input
                            type="email"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <label className="block mb-2 font-bold" htmlFor="password">{trans("common.account.password")}:</label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />

                            <button
                                key={showPassword ? 1 : 0}
                                type="button"
                                className="absolute top-1/7 right-0 px-2 py-1 cursor-pointer text-green-700 hover:text-green-500 hover:scale-110"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Icon name="EyeOff" className="w-5 h-5" /> : <Icon name="Eye" className="w-5 h-5" />}
                            </button>

                        </div>
                        <ButtonSpinner
                            type="submit"
                            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 my-3 rounded-lg transition-colors duration-200 self-end"
                        >
                            {trans("common.account.sign-in")}
                        </ButtonSpinner>





                    </div>
                }
            </div>


        </form>


    )
}

