import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SigninComponent} from './signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: SigninComponent
            },
        ])
    ],
    declarations: [
        SigninComponent,
        SwitcherComponent
    ]
})
export class SigninModule { }
