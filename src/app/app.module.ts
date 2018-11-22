import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { HttpClientModule } from '@angular/common/http';
import {BASE_URL, BASE_URL_TOKEN} from './config';
import { ProductsComponent } from './content/products/products.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {CardComponent} from './content/products/card/card.component';
import {ProductsFilterPipe} from './content/products/products-filter.pipe';
import { OneProductComponent } from './content/products/one-product/one-product.component';
import {OneProductResolverService} from './content/products/one-product/one-product-resolver.service';
import {CustomPreloadService} from './common/services/custom-preload.service';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffect} from './store/effects/products.effect';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/cart/product/product.component';
import {ProductsService} from './content/products/products.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective,
        ProductsComponent,
        OneProductComponent,
        CartComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadService }),
        EffectsModule.forRoot([ProductsEffect]),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [
        OneProductResolverService,
        CustomPreloadService,
        ProductsService,
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
