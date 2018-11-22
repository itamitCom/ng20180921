import { inject, TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BASE_URL, BASE_URL_TOKEN} from '../../config';
import {IProduct} from '../../common/entity/ProductInterface';
import {environment} from '../../../environments/environment';

const testProducts: IProduct[] = [
    {
        id: '1',
        title: 'Some product 1',
        serial: 123456789,
        author: 'Some brand 1',
        price: 1000,
        src: 'Some src 1'
    },
    {
        id: '2',
        title: 'Some product 2',
        serial: 223456789,
        author: 'Some brand 2',
        price: 2000,
        src: 'Some src 2'
    }
];

describe('ProductsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            HttpClientTestingModule
        ],
        providers: [
            ProductsService,
            {
                provide: BASE_URL_TOKEN,
                useValue: BASE_URL
            }
        ]
    }));

    it('test service', inject([ProductsService, HttpTestingController], (
        _productsService: ProductsService, _backend: HttpTestingController
    ) => {
        _productsService.getProducts().subscribe((res: IProduct[]) => {
            expect(Array.isArray(res)).toBeTruthy();
            expect(res.length).toEqual(2);
        });

        _backend.expectOne({
            method: 'GET',
            url: `${environment.baseUrl}/products`
        }).flush(testProducts);
    }));
});
