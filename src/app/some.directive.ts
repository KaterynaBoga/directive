import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSome]'
})
export class SomeDirective {

  constructor(
      private el: ElementRef
  ) {
    this.el.nativeElement.style.color = "#f00";
  }

}
