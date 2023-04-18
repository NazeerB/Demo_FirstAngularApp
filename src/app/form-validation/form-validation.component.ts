import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  //Form Validators
  UserForm = new FormGroup({

    UserName: new FormControl('', [Validators.required]),
    UserPassword: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6)]),
    Email: new FormControl('', [Validators.required, Validators.email])

  });
  get UserName() {
    return this.UserForm.get('UserName');
  }
  get UserPassword() {
    return this.UserForm.get('UserPassword');
  }
  get Email() {
    return this.UserForm.get('Eamil');
  }
  SubmitData() {

  }
}
