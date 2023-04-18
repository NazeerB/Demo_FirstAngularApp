import { Component,OnInit } from '@angular/core';
import { Employees } from '../Model/employees';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
 
  constructor() { }
  employee: Employees[] = [{
    Id: 1,
    name: 'Nazeer',
    gender: 'male',
    email: 'nazeer@gmail.com',
    phoneNumber: '8888888888',
    dateOfBirth: new Date("02/14/1984"),
    department: 'IT',
    isActive: false,
    employeePhoto:'/assets/images/bright.ico'
  },{
      Id: 2,
      name: 'Baig',
      gender: 'male',
      email: 'baig@gmail.com',
      phoneNumber: '9999999999',
      dateOfBirth: new Date("04/25/1984"),
      department: 'OS',
      isActive: false,
      employeePhoto: '/assets/images/salad.ico'
    },
  ]
  ngOnInit(): void { }
}
