'use client'
import { Button } from '@/components/ui/button'

import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ProductCardItem as CartItem } from '@/components/web/product-card'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import MainLayout from '@/components/web/layout/main'
import Link from 'next/link';



export default function CartPage() {

    const [items, setItems] = useState<CartItem[]>([]);
    const [subTotal, setSubTotal] = useState(0);

    const getCartItemsFromStorage = () => {
        const cartItems = JSON.parse(window.localStorage.getItem('cart') || '[]');
        return cartItems;
    }

    const handleLoadTable = () => {
        const cartItems = getCartItemsFromStorage();
        setItems(cartItems);
        const cal_subTotal = cartItems.reduce((total: number, item: CartItem) => total + ((item.quantity || 1) * item.price), 0)
        setSubTotal(cal_subTotal);
    }

    useEffect(() => {
        handleLoadTable();
    }, []);

    const handleRemoveFromCart = (id: number) => {
        const cartItems = getCartItemsFromStorage();
        const filteredItems = cartItems.filter((item: CartItem) => item.id !== id);
        window.localStorage.setItem('cart', JSON.stringify(filteredItems));
        handleLoadTable();
    }


    const handleQuantityChange = (id: number, quantity: number) => {
        const cartItems = getCartItemsFromStorage();
        const updatedItems = cartItems.map((item: CartItem) => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        window.localStorage.setItem('cart', JSON.stringify(updatedItems));
        handleLoadTable();
    }

    return (
        <MainLayout title={trans('e-commerce.myCart')} className='flex flex-col w-full items-center bg-blue'  >
            <div
                className='w-[70%] h-full flex flex-col px-6 py-6 md:px-12 md:py-12 bg-white rounded-md shadow-md items-center justify-center'
            >

                {items.length === 0 ? (
                    <p className='text-center text-2xl font-bold'>{trans('e-commerce.cart.empty')}</p>
                ) : (
                    <div className="grid grid-cols-1 w-full h-100 overflow-y-scroll">

                        <Card className='flex flex-row px-2 py-3 w-full h-20 items-center justify-between text-xl font-bold'>

                            <div className='w-full text-center'>
                                <p>{trans('erp.product')}</p>
                            </div>
                            <div className='w-full text-center'>
                                <p>{trans('common.image')}</p>
                            </div>
                            <div className='w-full text-center'>
                                <p>{trans('erp.quantity')}</p>
                            </div>
                            <div className='w-full text-center'>
                                <p>{trans('erp.price')}</p>
                            </div>
                            <div className='w-full text-center'>
                                <p>{trans('common.actions')}</p>
                            </div>


                        </Card>

                        {items.map((item: CartItem) => (
                            <Card key={item.id} className='flex flex-row px-2 py-3 w-full h-20 items-center justify-between '>

                                <div className='w-full text-center'>
                                    <h2 className='text-lg'>{item.title}</h2>
                                </div>
                                <div className='w-full text-center flex flex-row items-center justify-center'>
                                    <Image className='w-15 h-15' src={item.image} alt={item.title} width={200} height={200} />
                                </div>
                                <div className='w-full text-center'>

                                    <input name='quantity' onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} className='w-full h-10 border-3 rounded text-center' type="number" value={item.quantity || 1} />
                                </div>
                                <div className='w-full text-center'>
                                    <p className='mt-2'>{((item.quantity || 1) * item.price).toFixed(2)}</p>
                                </div>
                                <div className='w-full text-center'>
                                    <Button
                                        className='bg-red-400 text-white hover:bg-red-700 cursor-pointer'
                                        variant="link"
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        {trans('common.remove')}
                                    </Button>
                                </div>





                            </Card>
                        ))}
                    </div>
                )}

                <div className='flex items-center justify-between mt-6'>
                    <p>{trans('erp.subtotal')}: <span className='font-bold'>{subTotal.toFixed(2)}</span></p>

                </div>
                {
                    items.length > 0 && (
                        <Link href="/web/products">
                            <Button
                                variant={"default"}
                                className='mt-6 bg-green-500 hover:bg-green-600 cursor-pointer'

                            >
                                {trans('e-commerce.continueShopping')}
                                <ChevronRightIcon />
                            </Button>
                        </Link>
                    )
                }

            </div>


        </MainLayout>

    )
}



