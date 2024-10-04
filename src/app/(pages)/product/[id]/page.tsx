import ProductInformations from '@/components/product/ProductInformations';
import ProductNotFound from '@/components/product/ProductNotFound';
import ProductTitle from '@/components/product/ProductTitle';
import { products } from '@/core';

export default function PageProduct(props: any) {
    const id = +props.params.id;
    const product = products.find((product) => product.id === id);
    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product} />
            </div>
            <ProductInformations product={product} />
        </div>
    ) : (
        <ProductNotFound />
    );
}
