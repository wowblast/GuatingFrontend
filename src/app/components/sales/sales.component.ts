import { Component, OnInit } from '@angular/core';
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
    
    const self = this
    this.salesService.getQuotes()
    .then(function (data) {
        self.quotes = data
    })
    .catch(function (error) {
      alert(error)
    })
  }

}
