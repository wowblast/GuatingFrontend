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
            total += this.descuentoCantidad(item.quantity, item.price)
            });

            this.total.push(this.descuentoTotal(total, quote.client))
          }
        }
      })
    }, 2000);
  }

  private descuentoTotal(total, client) {
    return total - client.ranking*total
  }

  private descuentoCantidad (quantity, price) {
    if (quantity >= 24)
    {
      return price - price*0.1
    }else if (quantity >= 5) {
      return price - price*0.1
    }else {
      return price
    }
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
