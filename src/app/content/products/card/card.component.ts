import {Component, Input} from '@angular/core';
import {IProduct} from '../../../common/entity/ProductInterface';
import {Store} from '@ngrx/store';
import {AddProductToCart} from '../../../store/actions/cart.action';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public product!: IProduct;

    @Input()
    public position!: number;

    @Input()
    public isOdd!: boolean;

    private _addition = 67;

    public constructor(
        private _store: Store<any>
    ) {
        setTimeout(() => {
            this._addition = 71;
        }, 5000);
    }

    public dolarPrice(price: number): number {
        return price * this._addition;
    }

    public addToCart(product: IProduct): void {
        this._store.dispatch(new AddProductToCart(product));
    }
}
