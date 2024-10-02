import { Product } from '@/core';
import Link from 'next/link';
import React from 'react';

export interface ProductItensProps {
    product: Product;
}
export default function ProductItem(props: ProductItensProps) {
    return (
        <Link
            href={`product/${props.product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            {props.product.name}
        </Link>
    );
}
