import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title = "First Component in Angular";
  res ="";
  GetData() { 
    console.warn("Hello Clicked on Button");
  }

  GetMessage(val:string) {
    this.res = val;
  }

  count = 0;
  Counter(val: string) {
    val === 'increment'?this.count++: this.count--;
  }  
}
