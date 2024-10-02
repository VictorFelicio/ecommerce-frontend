import ProductItem from '@/components/product/ProductItem';
import { products } from '@/core';

export default function Home() {
    return (
        <div className="container grid grid-cols-4">
            {products.map((item) => {
                return <ProductItem key={item.id} product={item} />;
            })}
        </div>
    );
}
