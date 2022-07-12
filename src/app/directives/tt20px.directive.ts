import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTt20px]'
})
export class Tt20pxDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.fontSize = "20px"
  }

}
