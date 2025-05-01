'use client'
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import HeroCover from '@/components/web/hero-cover'
import ProductCard from '@/components/web/product-card'
import { A11y, Autoplay, Controller, EffectFade, FreeMode, Grid, HashNavigation, History, Keyboard, Manipulation, Navigation, Pagination, Parallax, Thumbs, Virtual } from 'swiper/modules'
import MainLayout from '@/components/web/layout/main'
import { MarketItemListViewModel } from '../../../../backend/default/layer2_application/view_models/erp/MarketItemViewModels'
import no_image from '@/assets/images/no-image-available.jpg'
import { apiService } from '@/scripts/api-service'


export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeProductCardSlide, setActiveProductCardSlide] = useState(0);
    const [coverSwiper, setCoverSwiper] = useState<SwiperClass>();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();


    const [marketListItems, setMarketListItems] = useState<MarketItemListViewModel[]>([]);


    useEffect(() => {

        const handleFetchMarketItems = async () => {
            const getMarketItems = await apiService.get("public/market-item").then(x => x.data);
            setMarketListItems(getMarketItems);

        }
        handleFetchMarketItems();


    }, []);



    return (
        <MainLayout className='flex flex-col w-full items-center'>

            <div className="flex flex-col w-full h-full items-end justify-center">
                {/* <HeroCover
                    src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt="Hero Cover"
                > */}
                <div className='w-full h-full flex flex-row items-start justify-center bg-blue-100'>
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
                        {marketListItems.map((marketListItem: MarketItemListViewModel, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={marketListItem.image || no_image}
                                    alt={marketListItem.item?.product?.name || ''}
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-[100%] h-160"
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
                            className="mySwiper h-90 absolute"
                            onActiveIndexChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
                        >
                            {marketListItems.map((marketListItem: MarketItemListViewModel, index: number) => (
                                <SwiperSlide key={index} className={'cursor-pointer transition duration-600 ease-in-out border-green-500' + (activeSlide === index ? ' border-2' : ' hover:border-5')}>

                                    {/* thumbnail */}
                                    <Image
                                        src={marketListItem.image || no_image}
                                        alt={marketListItem.item?.product?.name || ''}
                                        width={500}
                                        height={500}
                                        onClick={() => {
                                            if (coverSwiper && thumbsSwiper) {
                                                thumbsSwiper.slideTo(index);
                                                coverSwiper.slideTo(index);
                                            }
                                        }}
                                        className="object-cover w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>

                {/* </HeroCover> */}



            </div>

            <div className='w-full h-full px-5 py-20'>

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
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    speed={250}
                    pagination={{ clickable: true }}
                    navigation={true}
                    slidesOffsetBefore={60}

                    onActiveIndexChange={(swiper: any) => setActiveSlide(swiper.activeIndex)}
                >
                    {

                        marketListItems.map((marketListItem: MarketItemListViewModel, index: number) => (
                            <SwiperSlide key={index}>
                                <ProductCard marketListItem={marketListItem} />
                            </SwiperSlide>
                        ))




                    }
                </Swiper>


            </div>

        </MainLayout>

    )
}
