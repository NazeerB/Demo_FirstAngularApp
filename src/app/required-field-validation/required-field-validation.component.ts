import { Component } from '@angular/core';
import { Employees } from '../Model/employees';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-required-field-validation',
  templateUrl: './required-field-validation.component.html',
  styleUrls: ['./required-field-validation.component.css']
})
export class RequiredFieldValidationComponent {
myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    // handle form submission
  }
  
  // model = new Employees(101, "Nazeer");

}
