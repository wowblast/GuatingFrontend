import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data.json'
import { salesService} from '../salesService/salesService'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(public salesService: salesService) { }

  private quotes


  async ngOnInit() {
    // this.quotes = data;
    const self = this
    this.salesService.getQuotes().then(function (data) {
      self.quotes = data
    })
    console.log(this.quotes)
  }

}
