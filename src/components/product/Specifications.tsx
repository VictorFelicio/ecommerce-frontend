import { IconTag } from '@tabler/icons-react';
import { Product } from '@/core';
import Tag from '../shared/Tag';

export interface SpecificationsProps {
    product: Product;
}

export default function Specifications(props: SpecificationsProps) {
    return props.product ? (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag
                    label={props.product.specifications.highlight!}
                    icone={IconTag}
                    outlined
                />
            </div>
            {props.product.specifications &&
                Object.keys(props.product.specifications)
                    .filter((k) => k !== 'destaque')
                    .map((chave) => (
                        <div key={chave} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">
                                {chave}
                            </span>
                            <span className="p-2 w-2/3 bg-white/5 rounded">
                                {props.product.specifications[chave]}
                            </span>
                        </div>
                    ))}
        </div>
    ) : null;
}
