import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { IProduct } from './common/entity/ProductInterface';

@Component({
    selector: 'course-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public shopName = 'Gluts';
    public logoImg  = 'assets/img/logo.png';
    public year     = (new Date()).getFullYear();
    public text     = '';

    public products$: Observable<IProduct[]>

    public constructor(
        private _productsService: ProductsService

    ) {

    }

    public searchText(value: string): void {
        console.log(value);
        this.text = value;
    }

    public ngOnInit(): void {
        this.products$ = this._productsService.getProducts();
    }

    public ngOnDestroy(): void {

    }
}

// htmlTag, Component, directive, attribute, property
