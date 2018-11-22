import {Route} from '@angular/router';
import {ProductsComponent} from './content/products/products.component';
import {OneProductComponent} from './content/products/one-product/one-product.component';
import {OneProductResolverService} from './content/products/one-product/one-product-resolver.service';

export const routes: Route [] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: ':id',
                component: OneProductComponent,
                resolve: {
                    product: OneProductResolverService
                }
            }
        ]
    },
    {
        path: 'signin',
        loadChildren: './content/signin/signin.module#SigninModule'
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
