import { Component } from '@angular/core';
import { AccordionElement } from './accordion-element';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>


    <i class="fa fa-arrow-down"></i>


    <accordion
      [elements]="accordionElements" 
      colour="#ff00ff">
    </accordion>

    <hr>
    <accordion
      [elements]="newsElements" colour="lightcoral">
    </accordion>

    {{ price | currency:'EUR' }}
    <hr>
    {{ today | date:'yyyyMMdd' }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion investigation';
  price = 1.23456;
  today = new Date();


  accordionElements:AccordionElement[] = [
    new AccordionElement("element one", "this is element 1", true), 
    new AccordionElement("Element 2", "this is element 2"), 
    new AccordionElement("Element 3", "this is element 3"), 
    new AccordionElement("Element 4", "this is element 4")
  ];
  newsElements:AccordionElement[] = [
    new AccordionElement("News item 1", "this is news item 1"), 
    new AccordionElement("News item 2", "this is news item 2"), 
    new AccordionElement("News item 3", "this is news item 3"), 
  ]

}
