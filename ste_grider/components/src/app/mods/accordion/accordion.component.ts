import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() data:any[] = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleIndexChanged(i:number): void {
    this.openedItemIndex = i === this.openedItemIndex ? -1 :  i;
  }
}
