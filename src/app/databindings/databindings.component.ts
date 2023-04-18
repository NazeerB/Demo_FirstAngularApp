import { Component } from '@angular/core';

@Component({
  selector: 'app-databindings',
  templateUrl: './databindings.component.html',
  styleUrls: ['./databindings.component.css']
})
export class DatabindingsComponent {
  title = 'Welcome to learn Angular';
  firstName = "Nazeer";
  lastName = "Baig";
  age = 38;
  data = "Hello World";

  GetAge() {
    return this.age;
  }
  
  GetData(val: string) {
    this.title = val;
  }
}
