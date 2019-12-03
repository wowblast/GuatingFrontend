import { Component, OnInit, Input } from '@angular/core';
 import { salesService} from '../salesService/salesService';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  @Input() quotes: Array<any>;
  private total = [];
  constructor(public salesService: salesService) { }

  private Calculate () {
    this.quotes.forEach(quote => {
      let total = 0;
      quote.quoteListItems.forEach(item => {
      total += item.price*item.quantity;
      });
      this.total.push(total)
    })
  }

  private buy (quote, i) {
    quote.sold = true
    this.salesService.putQuote(quote.quoteName, quote).then(success => {
      console.log('Success')
      this.quotes.splice(i,1)
    }).catch(err => {
      console.log('fail')
    })
  }

  ngOnInit() {
    this.Calculate();
  }

}
