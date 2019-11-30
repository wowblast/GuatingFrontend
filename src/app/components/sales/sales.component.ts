import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  private quotes = data;

  ngOnInit() {
  }

}
