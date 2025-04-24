import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../ui-custom/Icon';

export type ProductCardItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

type ProductCardProps = {
    className?: string;
    product: ProductCardItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
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
                        <div className='flex flex-col items-center text-gray-600 hover:text-green-700 bg-transparent hover:bg-green-300 border-1 border-gray-300 rounded-full p-2 transition duration-300 ease-in-out'>
                            <Icon name="ShoppingCartIcon" size={23} />
                            <span className="text-center font-bold text-[10px]">Sepete Ekle</span>
                        </div>

                    </div>
                    <div className='h-full w-full flex flex-col'>
                        <div className='w-full h-25 mt-1'>
                            <p className="text-gray-700 text-wrap overflow-hidden">{product.description}</p>
                        </div>
                        <div className='w-full text-end'>
                            <p className="text-gray-600 font-bold">${product.price.toFixed(2)}</p>
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    );
};

export default ProductCard;

