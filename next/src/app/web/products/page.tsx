'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import MainLayout from '@/components/web/layout/main'
import ProductCard, { ProductCardItem } from '@/components/web/product-card'
import { HeaderButton } from '@/components/web/layout/header'
import { useEffect, useState } from 'react'
import Pagination from '@/components/ui-custom/Pagination'

export default function Products() {


    let _products: ProductCardItem[] = [
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

    const [products, setProducts] = useState<ProductCardItem[]>(_products);

    const [cartItems, setCartItems] = useState<ProductCardItem[]>([]);

    const [selectedSortBy, setSelectedSortBy] = useState<string>();


    const handleAddToCart = () => {
        const cartItems: ProductCardItem[] = typeof window !== 'undefined' && localStorageGetItem('cart') ? JSON.parse(localStorageGetItem('cart') || '[]') : [];
        setCartItems(cartItems);
    }
    useEffect(() => {
        handleAddToCart();
    }, []);



    const handleSetProducts = (props : {__products?: ProductCardItem[], sortBy?: string}) => {
        let { __products, sortBy } = props;
        __products = __products || _products;
        sortBy = sortBy || selectedSortBy;
        if(!sortBy)
        {
            setProducts(__products);
        }
        else if (sortBy === 'asc') {
            setProducts(__products.sort((a, b) => a.price - b.price));
        } else if (sortBy === 'desc') {
            setProducts(__products.sort((a, b) => b.price - a.price));
        }
        

    };

    const handlePageChange = (page: number) => {
        handleSetProducts({sortBy: selectedSortBy});
    }

    const headerButtons: HeaderButton[] = [
        { title: trans("erp.cart"), link: "/web/products/cart", icon: "ShoppingCartIcon", badge: cartItems.length }]

    return (
        <MainLayout title={trans('erp.products')} className='flex flex-col w-full items-center' headerButtons={headerButtons} >


            {/* Sort by Price */}
            <div className="w-full h-full bg-green-300  font-bold flex flex-row items-center justify-end px-66 py-2">
                <span className="mr-2 font-bold text-xl">{trans('common.sort')}:</span>
                <select  title='Sort' className="border border-gray-300 text-white rounded-xl px-3 py-1 bg-green-600 hover:bg-green-700" onChange={(e) => {
                    const value = e.currentTarget.value;
                    setSelectedSortBy(value);
                    handleSetProducts({sortBy: value});
                }}>
                    <option value="">{trans('common.select')}</option>
                    <option value="asc">{trans('e-commerce.sort.priceLowToHigh')}</option>
                    <option value="desc">{trans('e-commerce.sort.priceHighToLow')}</option>
                </select>
            </div>
            <div className="flex flex-row w-full h-full py-10 px-10 gap-10">
                {/* Sidebar */}
                <div className="w-1/4 h-full p-4 bg-gray-100">
                    {/* Search Bar */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder={trans('common.search_for', { what: trans('erp.product') })}
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => {
                                const value = e.currentTarget.value.toLowerCase();
                                const filteredProducts = _products.filter((product) => (
                                    product.title.toLowerCase().includes(value) ||
                                    product.description.toLowerCase().includes(value)
                                ));
                                handleSetProducts({__products: filteredProducts});
                            }}
                        />
                    </div>

                    {/* Filters */}
                    <div>
                        <h3 className="font-semibold mb-2">Filtreler</h3>
                        <div>
                            <label>
                                <input type="checkbox" onChange={() => {
                                    // Implement filter logic here
                                }} />
                                Filtre 1
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" onChange={() => {
                                    // Implement filter logic here
                                }} />
                                Filtre 2
                            </label>
                        </div>
                        {/* Add more filters as needed */}
                    </div>
                </div>


                <div className="flex flex-col w-full h-full items-end justify-center">



                    <div className='w-full h-full gap-6 flex flex-row flex-wrap items-start justify-start '>

                        {
                            products.map((product, index) => (
                                <ProductCard key={product.id} className='w-70' product={product} OnAddedToCart={(product => handleAddToCart())} />
                            ))
                        }




                    </div>


                    <Pagination OnPageChange={handlePageChange} numberOfItems={products.length} />

                </div>
            </div>


        </MainLayout>

    )
}
