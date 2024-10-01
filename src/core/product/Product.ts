import Prices from './Prices';
import Specifications from './Specifications';

export default interface Product extends Prices {
    id: number;
    name: string;
    description: string;
    mark: string;
    model: string;
    image: string;
    score: number;
    videoReview: string;
    tags: string[];
    specifications: Specifications;
}
