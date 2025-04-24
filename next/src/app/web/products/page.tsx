'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import MainLayout from '@/components/web/layout/main'
import ProductCard, { ProductCardItem } from '@/components/web/product-card'
import { Grid } from 'lucide-react'
import { HeaderButton } from '@/components/web/layout/header'

export default function Products() {


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
    ];

    const headerButtons : HeaderButton[] = [
        { title: trans("erp.cart"), link: "/web/products/cart", icon: "ShoppingCartIcon", badge: 100 }]

    return (
        <MainLayout title="MYSIS" className='flex flex-col w-full items-center' headerButtons={headerButtons} >

            <div className="flex flex-col w-full h-full items-end justify-center mt-16">
                <div className='w-full h-full pl-90 py-20 gap-10 flex flex-row flex-wrap items-start justify-start '>

                    {
                        products.map((product, index) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }


                </div>




            </div>


        </MainLayout>

    )
}
