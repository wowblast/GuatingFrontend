import { Component, OnInit, Input } from '@angular/core';
 import { salesService} from '../salesService/salesService';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  @Input() quotes: Array<any> = [];
  private total = [];
  constructor(public salesService: salesService) { }

  private Calculate () {
    setTimeout(() => {
      if (this.quotes !== undefined) {
      this.quotes.forEach(quote => {
        let total = 0;
        if (quote !== undefined)
        {
          if (quote.quoteListItems !== undefined)
          {
            quote.quoteListItems.forEach(item => {
            total += this.discountProduct(item.price, item.quantity);
            });
            this.total.push(this.clientDiscount(total, quote.client))
          }
        }
      })
    }
    }, 2000);
  }

  private clientDiscount (total, client) {
    return total - total*(client.ranking/100)
  }

  private discountProduct (price, quantity) {
    if (quantity >= 24) {
      return (price*quantity) - (price*quantity*0.1)
    } else if (quantity >= 5) {
      return (price*quantity) - (price*quantity*0.05)
    } else {
      return price * quantity
    }
  }

  private buy (quote, i) {
    const q = {
      quoteName: quote.quoteName,
      clientCode: quote.client.clientId,
      date: quote.date,
      sold: true,
      quoteLineItems: []
    }
    if (quote !== undefined && quote.quoteListItems !== undefined)
    {
    quote.quoteListItems.forEach(qo => {
      q.quoteLineItems.push({
        quoteName: quote.quoteName,
        productCode: qo.product.code,
        price: qo.price,
        quantity: qo.quantity
      })
    })
    this.salesService.putQuote(q.quoteName, q).then(success => {
      this.quotes.splice(i,1)
    }).catch(err => {
      alert(err)
    })
  }
  }

  ngOnInit() {
    this.Calculate();
  }

}
