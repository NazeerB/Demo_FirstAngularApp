import { Component } from '@angular/core';
import { CustomerService } from './Model/customer.service';
import {FormControl,FormGroup,NgForm,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private _obj: CustomerService) {
  //   var response = _obj.getCustomerData().subscribe(data => { console.log(data) });
  // }

  data = "Hello World";

  //genderPiple purpose
  persons = [{
    id: 101,
    name: 'Nazeer',
    gender:0
  },
    {
      id: 102,
      name: 'Baig',
      gender: 1
    },
    {
      id: 103,
      name: 'Heena',
      gender: 1
    }
  
  ]

  ChangeValue(data: any) {
    debugger
    this.data = data.txtname; 
  }

  GetData1(val: string) { 
    alert(val);
  }

  Save(form: NgForm): void {
    console.log(form);
  }
}
