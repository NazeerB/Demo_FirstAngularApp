import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(name1:string, gender: any): string {
    if (gender == 0)
    {
      return 'Male';
    }
    else{return 'FeMale'}
    
    // if (name != '') {
    //   return 'Mr.' +name;
    // }
    // else { return 'Miss.'+name }
    
  }

}
