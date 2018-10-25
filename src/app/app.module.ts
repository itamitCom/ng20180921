import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import {BASE_URL, BASE_URL_TOKEN} from './config';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        ProductsFilterPipe,
        TooltipDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: ProductsService,
            useClass: ProductsService
        },
        {
            provide: BASE_URL_TOKEN,
            useValue: BASE_URL
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
