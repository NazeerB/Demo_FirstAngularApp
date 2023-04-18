import { Component } from '@angular/core';
import { OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {

  @Output() DataEvent = new EventEmitter<string>(); 
  @Input() Item = '';
  
  constructor() { }
  ngOnInit(): void {

  }
}