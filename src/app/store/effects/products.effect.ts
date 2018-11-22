import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GET_PRODUCTS_PENDING, GetProductsError, GetProductsSucces} from '../actions/products.action';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
import {IProduct} from '../../common/entity/ProductInterface';
import {ProductsService} from '../../content/products/products.service';

@Injectable()
export class ProductsEffect {
    @Effect()
    public products$: Observable<Action> = this._actions$.pipe(
        ofType(GET_PRODUCTS_PENDING),
        switchMap(() => this._productsService.getProducts()
            .pipe(
                map((res: IProduct[]) => new GetProductsSucces(res)),
                catchError((err) => of(new GetProductsError(err)))
            )
        )
    );

    public constructor(
        private _actions$: Actions,
        private _productsService: ProductsService
    ) {}
}
