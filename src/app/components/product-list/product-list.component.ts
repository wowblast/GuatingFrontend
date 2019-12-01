import { Component, OnInit } from '@angular/core';
import dataClient from "./Data/dataClient.json"

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
  clientName: string;
  product: string;
  quantity: string;

    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];
   // clients: dataClient;


constructor() {
}
public createQuoting() {
  
}

changeClient(value) {
  this.clientName = value;
}
changeproduct(value) {
this.changeproduct = value;
}

ngOnInit(){

}
}