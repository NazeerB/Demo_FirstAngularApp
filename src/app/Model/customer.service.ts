import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _obj:HttpClient) { }

  getCustomerData()
  {
    debugger;
    return this._obj.get("https://localhost:7162/api/Users");
  }
}
