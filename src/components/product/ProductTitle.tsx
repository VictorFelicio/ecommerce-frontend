import { Product } from '@/core';

export interface ProductTitleProps {
    product: Product;
}

export default function ProductTitle(props: ProductTitleProps) {
    return (
        <div className="flex flex-col">
            <div className="text-2xl">{props.product?.name}</div>
            <div className="font-light text-zinc-400">
                {props.product?.description}
            </div>
        </div>
    );
}
