import {IProduct} from './ProductInterface';

export interface ICartProduct extends IProduct {
    'count': number;
};
