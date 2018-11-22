import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../../common/entity/ProductInterface';
import {HttpClient} from '@angular/common/http';
import {BASE_URL_TOKEN} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(
        private _http: HttpClient,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string
    ) { }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._baseUrl}/products`);
    }
}
