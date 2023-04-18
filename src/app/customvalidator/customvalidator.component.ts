// import { Component } from '@angular/core';
// import { FormControlName,FormControl ,FormGroup} from '@angular/forms';

// @Component({
//   selector: 'app-customvalidator',
//   templateUrl: './customvalidator.component.html',
//   styleUrls: ['./customvalidator.component.css']
// })
  
// export function ConfirmedValidator(controlName:string, matchingControlName:string) { 
//   return (formGroup: FormGroup) => { 
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//     if (matchingControl.errors && !matchingControl.errors['ConfirmedValidator']) { 
//       return
//     }
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ ConfirmedValidator: true });
//     }
//     else { 
//       matchingControl.setErrors(null);
//     }
//   }
// }
  
// export class CustomvalidatorComponent {

//   SaveForm() { }

// }
