import { Component } from '@angular/core';

@Component({
  selector: 'app-formmodule',
  templateUrl: './formmodule.component.html',
  styleUrls: ['./formmodule.component.css']
})
export class FormmoduleComponent {

  LoggedIn1(Data: any) {
    alert(Data.txtUser + " " + Data.txtUserpwd);
  }
}
