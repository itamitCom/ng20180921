import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../common/entity/ProductInterface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    public text = '';

    public products$: Observable<IProduct[]>

    public constructor(
        private _store: Store<any>
    ) {

    }

    public searchText(value: string): void {
        console.log(value);
        this.text = value;
    }

    public ngOnInit(): void {
        this.products$ = this._store.select('products');
    }

}
