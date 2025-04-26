'use client'
import Icon from '@/components/ui-custom/Icon'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        alert('Signed in successful')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-[400px] h-full items-start justify-center p-8 bg-white rounded-lg shadow-lg">
                <label className="block mb-2 font-bold" htmlFor="email">{trans("common.account.email")}:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <label className="block mb-2 font-bold" htmlFor="password">{trans("common.account.password")}:</label>
                <div className="relative w-full">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
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
                <button
                    type="submit"
                    className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 my-3 rounded-lg transition-colors duration-200 self-end"
                >
                    {trans("common.account.sign-in")}
                </button>
            </div>

        </form>


    )
}

