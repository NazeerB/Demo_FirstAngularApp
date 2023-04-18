import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeDirective]'
})
export class ChangeDirectiveDirective {

  constructor(private eltRef: ElementRef) { 
    this.eltRef.nativeElement.style.color ="green";
  }

}
