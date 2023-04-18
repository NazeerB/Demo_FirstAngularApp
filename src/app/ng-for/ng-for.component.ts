import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  Fruits = ["Apple", "Mango", "Banana", "Grapes"];
  FruitPrices = [{ name: "Apple", price: "150/Kg" },
    { name: "Mango", price: "250/Kg" },
    { name: "Banana", price: "50/Kg" },
    { name: "Grapes", price: "70/Kg" }
  ];

  //Nested Array 
  EmployeeWithDepartment = [{
    name: "nazeer", email: "nazeer@gmail.com",
    Departments: [{ Id: "101", name: "IT" }]
  },
    {
    name: "baig", email: "baig@gmail.com",
      Departments: [{ Id: "102", name: "Hardware" }]
    }  
  ];

  
}
