import { Component, Input, OnInit } from '@angular/core';
import { AccordionElement } from '../accordion-element';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-item
        *ngFor="let element of elements"
        [element]="element"
        (changed)="onChanged($event)"
        [colour]="colour"
      >
      </accordion-item>
    <div>`,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() elements:AccordionElement[] = [];
  @Input() colour:string = "lightgreen";

  onChanged(element:AccordionElement) {
    //alert(element.title);
    // close every element except the one that just changed
    for (let i=0; i<this.elements.length; i++) {

      if (this.elements[i] != element) {
        this.elements[i].expanded = false;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
