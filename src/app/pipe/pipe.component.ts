import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  birthday = new Date(1984, 2, 14); // April 15, 1988 -- since month parameter is 
}
