import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ICartProduct} from '../../common/entity/CartProductInterface';
import {selectAll, totalPrice, trueProductsCount} from '../../store/reducers/cart.reducer';
import {DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart} from '../../store/actions/cart.action';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public isOpen = true;

    public products$: Observable<ICartProduct[]>;
    public productsCount$: Observable<number>;
    public totalPrice$: Observable<number>;

    public constructor(
        private _store: Store<any>
    ) { }

    ngOnInit() {
        this.products$ = this._store.select(selectAll);
        this.productsCount$ = this._store.select(trueProductsCount);
        this.totalPrice$ = this._store.select(totalPrice);
    }

    public removeProduct(product: ICartProduct) {
        this._store.dispatch(new RemoveProductFromCart(product));
    }

    public incrementProduct(product: ICartProduct) {
        this._store.dispatch(new IncrementProductInCart(product));
    }

    public decrementProduct(product: ICartProduct) {
        this._store.dispatch(new DecrementProductInCart(product));
    }

}
