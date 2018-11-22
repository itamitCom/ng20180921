import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {IProduct} from '../../../common/entity/ProductInterface';

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public product$: Observable<IProduct>;

  public constructor(
      private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
      this._activatedRoute.paramMap.subscribe((params) => {
          console.log(params);
      });

      this._activatedRoute.queryParamMap.subscribe((params) => {
          console.log(params);
      });

      this.product$ = this._activatedRoute.data
          .pipe(map((product: IProduct) => {
            console.log(product);
              return product;
          }));
  }

}
