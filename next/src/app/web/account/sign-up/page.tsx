'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import HeroCover from '@/components/web/hero-cover'
import ProductCard, { ProductCardItem } from '@/components/web/product-card'
import { A11y, Autoplay, Controller, EffectFade, FreeMode, Grid, HashNavigation, History, Keyboard, Manipulation, Navigation, Pagination, Parallax, Thumbs, Virtual } from 'swiper/modules'
import MainLayout from '@/components/web/layout/main'

export default function SignIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        // TODO: call API to sign up user
        alert('Sign up successful')
    }

    return (
        <MainLayout className='flex flex-col w-full items-center'>
            <div className="flex flex-col w-full h-full items-end justify-center">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">{trans("common.account.sign-up")}</h1>
                    <label className="block mb-2" htmlFor="name">{trans("common.account.name")}</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <label className="block mb-2" htmlFor="email">{trans("common.account.email")}</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <label className="block mb-2" htmlFor="password">{trans("common.account.password")}</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <label className="block mb-2" htmlFor="confirmPassword">{trans("common.account.confirm_password")}</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                   
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                        {trans("common.account.sign-up")}
                    </button>
                </form>
            </div>

        </MainLayout>

    )
}

