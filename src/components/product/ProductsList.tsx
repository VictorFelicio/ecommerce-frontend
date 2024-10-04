'use client';
import { products } from '@/core';
// import useProdutos from '@/data/hooks/useProdutos'
import ProductItem from './ProductItem';
import ProductNotFound from './ProductNotFound';

export default function ProductsList() {
    // const { produtos } = useProdutos()
    return products.length ? (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {products.map((data) => (
                <ProductItem product={data} key={data.id} />
            ))}
        </div>
    ) : (
        <ProductNotFound hasButtonBack />
    );
}
