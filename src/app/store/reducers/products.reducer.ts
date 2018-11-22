import {IProduct} from '../../common/entity/ProductInterface';
import {GET_PRODUCTS_SUCCES} from '../actions/products.action';

const initialState: IProduct[] = [];

export function productsReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCES:
            return action.payload;
        default:
            return state;
    }
}
