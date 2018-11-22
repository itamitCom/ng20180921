import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

@Component({
  selector: 'course-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit {

    @ViewChild('f')
    public form: FormGroup;

    public authForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        this.authForm = this._formBuilder.group({
            name: ['Dima', [
                Validators.required,
                Validators.minLength(4),
                this._nameValidator
            ]],
            male: [true],
            emails: this._formBuilder.array([
                this._formBuilder.control('')
            ]),
            passwordGroup: this._formBuilder.group({
                password: ['q1w2e3r4', [
                    Validators.required,
                    Validators.minLength(4)
                ]],
                cpassword: ['q1w2e3r4', [
                    Validators.required,
                    Validators.minLength(4)
                ]]
            }, {
                asyncValidator: this._asyncEqualValidator
            })
        });

        this.authForm.valueChanges.subscribe((value) => {
            console.log(value);
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.authForm.patchValue({
                name: 'Dimas',
                password: '1234'
            });
        }, 3000);
    }

    public addEmail(): void {
        (this.authForm.get('emails') as FormArray)
            .push(this._formBuilder.control(''));
    }

    public removeEmail(index: number): void {
        (this.authForm.get('emails') as FormArray)
            .removeAt(index);
    }

    private _nameValidator({ value }: FormControl): ValidationErrors | null {
        const valid: boolean = /^[a-zA-Z]*$/.test(value);

        return valid
            ? null
            : { nospecial: true };
    }

    private _asyncEqualValidator({ value }: FormGroup): Observable<ValidationErrors> | null {
        const [password, cpassword] = Object.keys(value);
        const valid = value[password] === value[cpassword]
            ? null
            : { notequal: true };

        return of(valid).pipe(
            delay(3000)
        );
    }
}
