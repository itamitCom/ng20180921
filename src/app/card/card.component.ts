import {Component, Input} from '@angular/core';
import {IProduct} from '../common/entity/ProductInterface';

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

    public constructor() {
        setTimeout(() => {
            this._addition = 71;
        }, 5000);
    }

    public dolarPrice(price: number): number {
        return price * this._addition;
    }
}
