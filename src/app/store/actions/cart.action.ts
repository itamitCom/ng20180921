import {IProduct} from '../../common/entity/ProductInterface';
import {ICartProduct} from '../../common/entity/CartProductInterface';

export const ADD_PRODUCT_TO_CART       = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART  = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_PRODUCT_IN_CART = 'INCREMENT_PRODUCT_IN_CART';
export const DECREMENT_PRODUCT_IN_CART = 'DECREMENT_PRODUCT_IN_CART';

export class AddProductToCart {
    public type = ADD_PRODUCT_TO_CART;

    public constructor(public payload: IProduct) {}
}

export class RemoveProductFromCart {
    public type = REMOVE_PRODUCT_FROM_CART;

    public constructor(public payload: ICartProduct) {}
}

export class IncrementProductInCart {
    public type = INCREMENT_PRODUCT_IN_CART;

    public constructor(public payload: ICartProduct) {}
}

export class DecrementProductInCart {
    public type = DECREMENT_PRODUCT_IN_CART;

    public constructor(public payload: ICartProduct) {}
}

export type CartAction = AddProductToCart | RemoveProductFromCart | IncrementProductInCart | DecrementProductInCart;
