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

export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeProductCardSlide, setActiveProductCardSlide] = useState(0);
    const [coverSwiper, setCoverSwiper] = useState<SwiperClass>();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    const products: ProductCardItem[] = [
        {
            id: 1,
            title: 'Product 1',
            description: "Ürün 1",
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 30
        },
        {
            id: 2,
            title: 'Product 2',
            description: "Ürün 2",
            image: 'https://images.unsplash.com/photo-1692032667961-d17dcb5cef15?w=500&auto=format&fit=crop&q=60',
            price: 30
        },
        {
            id: 3,
            title: 'Product 3',
            description: "Ürün 3",
            image: 'https://images.unsplash.com/photo-1692032667961-d17dcb5cef15?w=500&auto=format&fit=crop&q=60',
            price: 30
        },
        {
            id: 4,
            title: 'Product 4',
            description: "Ürün 4",
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 40
        },
        {
            id: 5,
            title: 'Product 3',
            description: "Ürün 3",
            image: 'https://images.unsplash.com/photo-1692032667961-d17dcb5cef15?w=500&auto=format&fit=crop&q=60',
            price: 30
        },
        {
            id: 6,
            title: 'Product 4',
            description: "Ürün 4",
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 40
        },
        {
            id: 7,
            title: 'Product 4',
            description: "Ürün 4",
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 40
        },
    ]

    return (
        <MainLayout title="MYSIS" className='flex flex-col w-full items-center'>

            <div className="flex flex-col w-full h-full items-end justify-center">
                {/* <HeroCover
                    src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt="Hero Cover"
                > */}
                <div className='w-full h-full mt-15 flex flex-row items-start justify-center bg-blue-100'>
                    <Swiper
                    onSwiper={setCoverSwiper}
                        className='w-full h-full z-999'
                        modules={[
                            Autoplay,
                            Thumbs,
                            FreeMode,
                            Navigation,
                            EffectFade
                        ]}
                        
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        // autoplay={{ delay: 3000 }}
                        effect='fade'
                        speed={1000}
                        fadeEffect={{ crossFade: true }}
                        pagination={{ clickable: true }}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        onActiveIndexChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
                    >
                        {products.map((product: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="object-cover w-[100%] h-150"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='w-[100px] h-100 absolute right-0 my-30 mx-20 z-1 flex flex-col'>
                        <Swiper
                            direction='vertical'
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper h-90"
                            onActiveIndexChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
                            slideActiveClass='border-green-500'
                        >
                            {products.map((product: any, index: number) => (
                                <SwiperSlide key={index}  className='cursor-pointer'>

                                    {/* thumbnail */}
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={500}
                                        height={500}
                                        onClick={() => {
                                            if(coverSwiper && thumbsSwiper)
                                            {
                                                thumbsSwiper.slideTo(index);
                                                coverSwiper.slideTo(index);
                                            }
                                        }}
                                        className="object-cover w-20 h-18 "
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>

                {/* </HeroCover> */}



            </div>

            <div className='flex flex-row w-full gap-7 items-center justify-center h-full px-5 py-20'>

                <Swiper
                    className='w-full h-full z-999'
                    direction='horizontal'
                    modules={[
                        Autoplay,
                        Thumbs,
                        FreeMode,
                        Navigation,
                        EffectFade
                    ]}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    speed={250}
                    pagination={{ clickable: true }}
                    navigation={true}
                    slidesOffsetBefore={60}

                    onActiveIndexChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
                >
                    {

                        products.map((product: any, index: number) => (
                            <SwiperSlide key={index}>
                                <ProductCard key={index} product={product} />
                            </SwiperSlide>
                        ))




                    }
                </Swiper>


            </div>

        </MainLayout>

    )
}
