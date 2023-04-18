import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
    
@Component({
  selector: 'app-reativeforms',
  templateUrl: './reativeforms.component.html',
  styleUrls: ['./reativeforms.component.css']
})
export class ReativeformsComponent {

  loginForm = new FormGroup({

    txtUser: new FormControl(''),
    txtUserpwd: new FormControl('')

  })

  LoggedIn() {
    alert(this.loginForm.controls["txtUser"].value + " " + this.loginForm.controls["txtUserpwd"].value);
  }
} 
