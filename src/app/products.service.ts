import {Observable} from 'rxjs';
import {IProduct} from './common/entity/ProductInterface';
import {delay, map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {BASE_URL_TOKEN} from './config';
import {Inject} from '@angular/core';

export class ProductsService {

    constructor(
        @Inject(HttpClient) private _http: HttpClient,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string
    ) { }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get(`${this._baseUrl}/products.json`)
            .pipe(
                delay(3000),
                map((res: { data: IProduct[] }) => res.data)
            );
    }
}
