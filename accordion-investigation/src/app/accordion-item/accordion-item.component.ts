import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccordionElement } from '../accordion-element';

@Component({
  selector: 'accordion-item',
  template: `
    <div>

      <h1 (click)="onClick()"
      [ngStyle]="{'background-color': colour}"
      >
        {{ element.title | titlecase }}
        <i *ngIf="element.expanded" class="fa fa-arrow-up"></i>
        <i *ngIf="!element.expanded" class="fa fa-arrow-down"></i>
      </h1>


      <!--<h1 (click)="element.expanded = !element.expanded">{{ element.title }}</h1>-->
      <p *ngIf="element.expanded">{{ element.text }}</p>

    </div>
    `,
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @Input() element:AccordionElement = new AccordionElement("","");
  @Input() colour:string = "lightgreen";

  @Output() changed = new EventEmitter();

  onClick() {
    this.element.expanded = !this.element.expanded;
    this.changed.emit(this.element);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
