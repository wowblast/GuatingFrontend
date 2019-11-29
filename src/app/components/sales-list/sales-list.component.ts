import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  @Input() quotes: Object;

  constructor() { }

  ngOnInit() {
    console.log(this.quotes)
  }

}
