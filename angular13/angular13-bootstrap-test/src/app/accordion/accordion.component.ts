import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion-item.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items:AccordionItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
