import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ICartProduct} from '../../common/entity/CartProductInterface';
import {
    ADD_PRODUCT_TO_CART, CartAction, DECREMENT_PRODUCT_IN_CART, DecrementProductInCart, INCREMENT_PRODUCT_IN_CART, IncrementProductInCart,
    REMOVE_PRODUCT_FROM_CART
} from '../actions/cart.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
    selectId: (product: ICartProduct) => product.id
});

const cartInitialState = adapter.getInitialState({});

export function cartReducer(state = cartInitialState, action: CartAction) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            const entity = state.entities[action.payload.id];
            return adapter.upsertOne({
                ...action.payload,
                count: entity ? entity.count + 1 : 1
            }, state);
        }

        case REMOVE_PRODUCT_FROM_CART: {
            return adapter.removeOne(action.payload.id, state);
        }

        case INCREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne({
                id: action.payload.id,
                changes: { count: (action as IncrementProductInCart).payload.count + 1 }
            }, state);
        }

        case DECREMENT_PRODUCT_IN_CART: {
            return adapter.updateOne({
                id: action.payload.id,
                changes: { count: (action as DecrementProductInCart).payload.count - 1 }
            }, state);
        }

        default:
            return state;
    }
}

export const {selectAll, selectTotal} = adapter.getSelectors(createFeatureSelector('cartProducts'));

export const trueProductsCount = createSelector(
    selectAll,
    (products: ICartProduct[]) => {
        return products.reduce<number>((count: number, product: ICartProduct) => {
            return count += product.count;
        }, 0);
    }
);

export const totalPrice = createSelector(
    selectAll,
    (products: ICartProduct[]) => {
        return products.reduce<number>((price: number, product: ICartProduct) => {
            return price += product.price * product.count;
        }, 0);
    }
);
