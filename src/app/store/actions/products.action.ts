import {IProduct} from '../../common/entity/ProductInterface';

export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_SUCCES  = 'GET_PRODUCTS_SUCCES';
export const GET_PRODUCTS_ERROR   = 'GET_PRODUCTS_ERROR';

export class GetProductsPending {
    public type = GET_PRODUCTS_PENDING;
}

export class GetProductsSucces {
    public type = GET_PRODUCTS_SUCCES;

    public constructor(public payload: IProduct[]) {}
}

export class GetProductsError {
    public type = GET_PRODUCTS_ERROR;

    public constructor(public payload: IProduct[]) {}
}
