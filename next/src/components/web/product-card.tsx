import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../ui-custom/Icon';

export type ProductCardItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    currency?: string;
    quantity?: number;

}

type ProductCardProps = {
    className?: string;
    product: ProductCardItem;
    OnAddedToCart?: (product: ProductCardItem) => void
    OnAddedToFavourites?: (product: ProductCardItem) => void

};

const checkIsAddedToCart = (product: ProductCardItem) => {
    
    const otherProducts = JSON.parse(window.localStorage.getItem('cart') || '[]');
    return otherProducts.find((p: ProductCardItem) => p.id === product.id)
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className, OnAddedToCart, OnAddedToFavourites }) => {



    const [isAddedToCart, setIsAddedToCart] = React.useState<boolean>(false);
   
    useEffect(() => {
        setIsAddedToCart(checkIsAddedToCart(product));
    }, [product]);

   

    const handleAddToCart = () => {


        let otherProducts = JSON.parse(window.localStorage.getItem('cart') || '[]');
        if (otherProducts.find((p: ProductCardItem) => p.id === product.id)) {
            otherProducts = otherProducts.filter((p: ProductCardItem) => p.id !== product.id);
            console.log('Product removed from cart:', product);
            setIsAddedToCart(false);
        }
        else {
            otherProducts.push(product);
            console.log('Product added to cart:', product);
            if (OnAddedToCart) {
                OnAddedToCart(product);
                setIsAddedToCart(true);
            }
        }
        window.localStorage.setItem('cart', JSON.stringify(otherProducts));

    };

    const handleAddToFavourites = () => {
        if (OnAddedToFavourites) {
            OnAddedToFavourites(product);
        }
    }

    return (
        <div className={className + " w-60 h-full border rounded-lg overflow-hidden shadow-md hover:shadow-xl"}>
            <Link href={`/product/${product.id}`}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className={" object-cover w-64 h-38 hover:scale-105 transition-transform duration-300 ease-in-out"}
                />
                <div className="p-4">
                    <div className='flex flex-row items-center justify-between'>
                        <h2 className="text-lg text-gray-600 font-semibold">{product.title}</h2>
                        <div className='w-[90px] h-[90px]' key={isAddedToCart ? 1 : 0} onClick={(e) => { e.preventDefault(); handleAddToCart(); }} >
                            {
                                !isAddedToCart ?
                                    <div className='h-full text-green-500 flex flex-col items-center justify-center rounded-full p-2 transition duration-600 ease-in-out hover:scale-110'>
                                        <Icon name="ShoppingCartIcon"  size={23} />
                                        <span className="text-center font-bold text-[10px] ">{trans("e-commerce.addToCart")}</span>
                                    </div>
                                    :
                                    <div className='h-full text-red-500 flex flex-col items-center justify-center rounded-full p-2 transition duration-600 ease-in-out hover:scale-110'>
                                        <Icon name="ShoppingCartIcon" className='scale-x-[-1]' size={23} />
                                        <span className="text-center font-bold text-[10px]">{trans("e-commerce.removeFromCart")}</span>
                                    </div>

                            }
                        </div>

                    </div>
                    <div className='h-full w-full flex flex-col'>
                        <div className='w-full h-25 mt-1'>
                            <p className="text-gray-700 text-wrap overflow-hidden">{product.description}</p>
                        </div>
                        <div className='w-full text-end'>
                            <p className="text-gray-600 font-bold">{(product.currency ?? "₺") + product.price.toFixed(2)}</p>
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default ProductCard;

