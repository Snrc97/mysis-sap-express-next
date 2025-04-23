import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type ProductCardItem = {
        id:  number;
        title: string;
        description: string;
        price: number;
        image: string;
}

 type ProductCardProps = {
  product: ProductCardItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
          </div>
      </Link>
    </div>
  );
};

export default ProductCard;

