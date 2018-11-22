import {Resolve, Router} from '@angular/router';
import {IProduct} from '../../../common/entity/ProductInterface';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable, of} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL_TOKEN} from '../../../config';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct> {

    public constructor(
        private _http: HttpClient,
        private _router: Router,
        @Inject(BASE_URL_TOKEN) private _baseUrl: string
    ) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        console.log(state);
        return this._http.get(`${this._baseUrl}/products/${route.params.id}`)
            .pipe(
                map((res: IProduct) => res),
                catchError((_err) => {
                    this._router.navigate(['/products']);
                    return of(null);
                })
            );
    }
}
