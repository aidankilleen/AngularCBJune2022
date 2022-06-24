import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatText]'
})
export class FormatTextDirective {

  @Input() appFormatText:string = "uppercase";

  constructor(private element:ElementRef) { 
    console.log("FormatTextDirective constructor called");
  }
  @HostListener('focus') onFocus() {
    console.log("textbox received focus()");
  }

  @HostListener('blur') onBlur() {
    console.log("textbox lost focus");

    let value = this.element.nativeElement.value;

    if (this.appFormatText == "uppercase") {
      value = value.toUpperCase();
    } else {
      value = value.toLowerCase();
    }
    console.log(value);
    this.element.nativeElement.value = value;

  }
}
