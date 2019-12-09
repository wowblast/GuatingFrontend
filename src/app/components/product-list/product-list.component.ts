import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../models/Client';
import { Product } from '../models/Product';
import { Quote } from '../models/Quote';
import { QuoteItem } from '../models/QuoteItem';
import { ClientsService } from '../services/clients.service'
import { ProductsService } from '../services/products.service'
import { QuotesService } from '../services/quotes.service'


export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductlistComponent implements OnInit {
  clientName: string = 'default';
  productCode: string = 'default';
  quantity: number = 10;
  quoteName: string = 'COT-001';
  price: number = 7;
  protected clients: Client[];
  protected products: Product[];
  quoteItemList: QuoteItem;


  quote: Quote = {
    quoteName: 'Cotización tienda 1',
    clientCode: 'MTR-6000',
    date: new Date(),
    sold: false,
    quoteLineItems: [this.quoteItemList]
  }

  constructor(private snackBar: MatSnackBar, public clientService: ClientsService, public productService: ProductsService, public quoteService: QuotesService) { }

  openSnackBar() {
    this.snackBar.open('no stock', 'cerrar', {
      duration: 2000,
    });
  }
  public createQuoting() {

    try {
      if (this.clientName == 'default' || this.productCode == 'default') {
        this.snackBar.open('cotización incompleta', 'cerrar', {
          duration: 2000,
        });
      }
      else if (this.getProductStock(this.productCode) > this.quantity) {
        this.quote.quoteLineItems.push(
          {
            quoteName: this.quoteName,
            productCode: this.productCode,
            price: this.price,
            quantity: this.quantity
          }
        )
      }
      else {
        this.snackBar.open('no stock', 'cerrar', {
          duration: 2000,
        });
      }
      
    } catch (error) {
      this.snackBar.open('Ocurrio un error', 'cerrar', {
        duration: 2000,
      });
    }
  

  }

  changeClient(value) {
    this.clientName = value;
    this.quote.clientCode = value;
  }
  changeProduct(value) {
    this.productCode = value;

  }

  getProductStock(productCode) {
    const actualProduct = this.products.filter(product => {
      return product.code == productCode
    });

    return actualProduct[0].stock;
  }
  saveQuoteList() {
    this.quoteService
      .postQuote(this.quote).then(Response => Response ).catch(error => error)
    this.quote.quoteLineItems = [this.quoteItemList];
  }

  ngOnInit() {
    this.quote.quoteLineItems.pop()
    this.clientService.getClients().
    then(Response => this.clients =  Response as Array<Client>)
    .catch(error => console.log(error))
    this.productService.getProducts()
      .then(Response => {this.products = Response as Array<Product>})
      .catch(error => console.log(error))

      
  }

}

