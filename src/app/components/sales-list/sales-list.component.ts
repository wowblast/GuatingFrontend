import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  @Input() quotes: Array<Object>;
  private total = [];
  constructor() { }

  private Calculate () {
    this.quotes.forEach(quote => {
      let total = 0;
      quote.qliList.forEach(item => {
      total += item.price*item.quantity;
      });
      this.total.push(total)
    })
  }

  private buy (quote, i) {
    this.quotes.splice(i,1)
    console.log(this.quotes)
  }

  ngOnInit() {
    this.Calculate();
  }

}
