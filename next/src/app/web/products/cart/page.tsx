'use client'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import { ChevronRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import MainLayout from '@/components/web/layout/main'
import Link from 'next/link'
import { CartMarketItemListViewModel } from '@/../../backend/default/layer2_application/view_models/erp/MarketItemViewModels'
import no_image from '@/assets/images/no-image-available.jpg'
import { formatCurrency } from '@/helpers/extensions/client_helper'
import { apiService } from '@/scripts/api-service'



export default function CartPage() {

    const [items, setItems] = useState<CartMarketItemListViewModel[]>([]);
    const [subTotal, setSubTotal] = useState(0);

    const getCartItemsFromStorage = () => {
        const cartItems = JSON.parse(localStorageGetItem('cart') || '[]');
        return cartItems;
    }

    const handleLoadTable = () => {
        const cartItems = getCartItemsFromStorage();
        setItems(cartItems);
        const cal_subTotal = cartItems.reduce((total: number, item: CartMarketItemListViewModel) => total + ((item.cart_quantity || 1) * item.price), 0)
        setSubTotal(cal_subTotal);

    }

    const handleUpdateLoadTable = () => {
        handleLoadTable();
        setTimeout(() => {
            handleUpdateLoadTable();
        }, 2000);
    }

    useEffect(() => {
        handleUpdateLoadTable();
    }, []);

    const handleRemoveFromCart = (id: number) => {
        const cartItems = getCartItemsFromStorage();
        const filteredItems = cartItems.filter((item: CartMarketItemListViewModel) => item.id !== id);
        localStorageSetItem('cart', JSON.stringify(filteredItems));
        handleLoadTable();
    }


    const handleQuantityChange = (id: number, cart_quantity: number) => {
        const cartItems = getCartItemsFromStorage();
        const updatedItems = cartItems.map((item: CartMarketItemListViewModel) => {
            if (item.id === id) {
                return { ...item, cart_quantity };
            }
            return item;
        });
        localStorageSetItem('cart', JSON.stringify(updatedItems));
        handleLoadTable();
    }

    const handleOrder = async () => {
        const body: any = {
            marketItems: items
        }
        const result = await apiService.post( "order", body);
    }

    return (
        <MainLayout title={trans('e-commerce.myCart')} className='flex flex-col w-full items-center bg-blue'  >
            <div
                className='w-[70%] h-[700px] overflow-y-scroll flex flex-col px-6 py-6 md:px-12 md:py-12 bg-white rounded-md shadow-md items-center justify-start'
            >

                {items.length === 0 ? (
                    <p className='text-center text-2xl font-bold'>{trans('e-commerce.cart.empty')}</p>
                ) : (
                    <div className="grid grid-cols-1 w-full h-auto">

                        <Card className='flex flex-row px-2 py-3 w-full h-20 items-center text-xl font-bold'>

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

                        {items.map((x: CartMarketItemListViewModel) => (
                            <Card key={x.id} className='flex flex-row px-2 py-3 w-full h-20 items-center '>

                                <div className='w-full text-center'>
                                    <h2 className='text-lg'>{x.item.product.name}</h2>
                                </div>
                                <div className='w-full text-center flex flex-row items-center justify-center'>
                                    <Image className='w-15 h-15' src={x.image ?? no_image} alt={x.item.product.name} width={200} height={200} />
                                </div>
                                <div className='w-full text-center'>

                                    <div className='flex items-center justify-center'>
                                        <button
                                            type='button'
                                            className='w-7 h-10 px-2 py-1 border rounded-r bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold hover:scale-105 transition-all duration-300 ease-in-out'
                                            onClick={() => handleQuantityChange(x.id, (x.cart_quantity || 1) - 1)}
                                        >
                                            -
                                        </button>
                                        <input
                                            name='quantity'
                                            className='w-12 h-10 border-t border-b text-center
                                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                                            '
                                            type='number'
                                            value={x.cart_quantity || 1}
                                            readOnly
                                        />
                                        <button
                                            type='button'
                                            className='w-7 h-10 px-2 py-1 border rounded-r bg-green-500 hover:bg-green-400 cursor-pointer text-white font-bold hover:scale-105 transition-all duration-300 ease-in-out'
                                            onClick={() => handleQuantityChange(x.id, (x.cart_quantity || 1) + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full text-center'>
                                    <p className='mt-2 font-bold'>{formatCurrency((x.cart_quantity || 1) * x.price)}</p>
                                </div>
                                <div className='w-full text-center'>
                                    <Button
                                        className='bg-red-400 text-white hover:bg-red-700 cursor-pointer'
                                        variant="link"
                                        onClick={() => handleRemoveFromCart(x.id)}
                                    >
                                        {trans('common.remove')}
                                    </Button>
                                </div>





                            </Card>
                        ))}
                    </div>
                )}

                <div className='w-full h-full'>

                </div>

                <div className='flex items-center justify-between mt-6'>
                    <p>{trans('erp.subtotal')}: <span className='font-bold'>{
                        formatCurrency(subTotal)}</span></p>

                </div>
                {
                    items.length > 0 && (
                        <div className='flex flex-row gap-5 items-center justify-center'>
                                <Button
                                variant={"default"}
                                    className='mt-6 bg-gray-500 hover:bg-gray-500 cursor-not-allowed'
                                >
                                    {trans('e-commerce.continueShopping')}
                                    <ChevronRightIcon />
                                </Button>
                                <Button
                                    variant={"default"}
                                    className='mt-6 bg-green-500 hover:bg-green-600 cursor-pointer'
                                    onClick={handleOrder}
                                >
                                    {trans('e-commerce.cart.order')}
                                    <ChevronRightIcon />
                                </Button>
                        </div>

                    )
                }

            </div>


        </MainLayout>

    )
}



