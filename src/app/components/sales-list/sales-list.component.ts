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
    setTimeout(() => {
      this.quotes.forEach(quote => {
        let total = 0;
        if (quote !== undefined)
        {
          if (quote.quoteListItems !== undefined)
          {
            quote.quoteListItems.forEach(item => {
            total += item.price*item.quantity;
            });
            this.total.push(total)
          }
        }
      })
    }, 2000);
  }

  private buy (quote, i) {
    const q = {
      quoteName: quote.quoteName,
      clientCode: quote.client.clientCode,
      date: quote.date,
      sold: true,
      qliList: []
    }
    if (quote !== undefined)
    {
    quote.quoteListItems.forEach(qo => {
      q.qliList.push({
        quoteName: quote.quoteName,
        productCode: qo.productCode,
        price: qo.price,
        quantity: qo.quantity
      })
    })
    this.salesService.putQuote(q.quoteName, q).then(success => {
      console.log('Success')
      this.quotes.splice(i,1)
    }).catch(err => {
      console.log('fail')
    })
  }
  }

  ngOnInit() {
    this.Calculate();
  }

}
