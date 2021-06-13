import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
 stats = [
   { label: '# of users', value: 22},
   { label: 'Revenue', value: 100},
   { label: 'Review', value: 50}
 ];

  items = [
    { image: '', title: 'Couch', description: 'This is a fantastic couch to sit on'},
    { image: '', title: 'Dresser', description: 'This is a great dresser to put stuff in'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
