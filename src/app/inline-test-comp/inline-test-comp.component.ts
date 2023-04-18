import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-test-comp',
  templateUrl: './inline-test-comp.component.html',
  styles: [ '.First{color:blue}'
  ]
})
export class InlineTestCompComponent {

  data = [{ id: 101, name: 'Nazeer' }]; 
  date= Date();
}
