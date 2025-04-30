import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../ui-custom/Icon'
import { motion } from "framer-motion"
import { MarketItemListViewModel } from '@/../../backend/default/layer2_application/view_models/erp/MarketItemViewModels'
import no_image from '@/assets/images/no-image-available.jpg'
import { formatCurrency } from '@/helpers/extensions/client_helper'

type ProductCardProps = {
    className?: string;
    marketListItem: MarketItemListViewModel;
    OnAddedToCart?: (x: MarketItemListViewModel) => void
    OnAddedToFavourites?: (x: MarketItemListViewModel) => void

};

const checkIsAddedToCart = (x: MarketItemListViewModel) => {

    const otherProducts = JSON.parse(localStorageGetItem('cart') || '[]');
    return otherProducts.find((p: MarketItemListViewModel) => p.id === x.id)
}

const ProductCard: React.FC<ProductCardProps> = ({ marketListItem, className, OnAddedToCart, OnAddedToFavourites }) => {



    const [isAddedToCart, setIsAddedToCart] = React.useState<boolean>(false);

    useEffect(() => {
        setIsAddedToCart(checkIsAddedToCart(marketListItem));
    }, [marketListItem]);



    const handleAddToCart = () => {


        let otherProducts = JSON.parse(localStorageGetItem('cart') || '[]');
        if (otherProducts.find((p: MarketItemListViewModel) => p.id === marketListItem.id)) {
            otherProducts = otherProducts.filter((p: MarketItemListViewModel) => p.id !== marketListItem.id);
            console.log('Product removed from cart:', marketListItem);
            setIsAddedToCart(false);
        }
        else {
            otherProducts.push(marketListItem);
            console.log('Product added to cart:', marketListItem);
            setIsAddedToCart(true);

        }
        localStorageSetItem('cart', JSON.stringify(otherProducts));
        if (OnAddedToCart) {
            OnAddedToCart(marketListItem);
        }

    };

    const handleAddToFavourites = () => {
        if (OnAddedToFavourites) {
            OnAddedToFavourites(marketListItem);
        }
    }

    return (
        <div className={className + " h-full border rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:bg-gray-800 dark:hover:bg-gray-700"}>
            <Link href={`/product/${marketListItem.id}`}>
                <Image
                    src={marketListItem?.image || no_image}
                    alt={marketListItem.item.product.name}
                    width={300}
                    height={300}
                    className={" object-cover w-full h-45 hover:scale-105 transition-transform duration-300 ease-in-out"}
                />
                <div className="p-4">
                    <div className='flex flex-row items-center justify-between'>
                        <h2 className="text-lg font-semibold">{marketListItem.item.product.name}</h2>
                        <motion.div className='w-[90px] h-[90px]' key={isAddedToCart ? 1 : 0} onClick={(e) => { e.preventDefault(); handleAddToCart(); }}
                            initial={{ scaleX: isAddedToCart ? 1 : -1 }}
                            animate={{ scaleX: isAddedToCart ? -1 : 1 }}
                            transition={{ duration: 0.5, ease: "linear" }}

                        >
                            {
                                !isAddedToCart ?
                                    <div className='h-full text-green-500 hover:text-green-700 text-[10px] font-bold text-center flex flex-col items-center justify-center rounded-full p-2 transition duration-300 ease-in hover:scale-110'>
                                        <Icon name="ShoppingCartIcon" size={23} />
                                        <span>{trans("e-commerce.addToCart")}</span>
                                    </div>
                                    :
                                    <div className='h-full text-red-600 hover:text-red-700 text-[10px] font-bold text-center flex flex-col items-center justify-center rounded-full p-2 transition duration-300 ease-out hover:scale-110'>
                                        <Icon name="ShoppingCartIcon" size={23} />
                                        <span className='scale-x-[-1]'>{trans("e-commerce.removeFromCart")}</span>
                                    </div>
                            }
                        </motion.div>

                    </div>
                    <div className='h-full w-full flex flex-col'>
                        <div className='w-full h-25 mt-1'>
                            <p className=" text-wrap overflow-hidden">{marketListItem.item.product.description}</p>
                        </div>
                        <div className='w-full text-end'>
                            <p className="font-bold">{formatCurrency(marketListItem.price)}</p>
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default ProductCard;

