import { Injectable } from '@angular/core';
import config from '../../../assets/config.json';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  emptyProducts: Observable<Product>;
  constructor(private http: HttpClient) { }
  getProducts() {

     var promise = new Promise((resolve, reject) => {
      this.http.get<Product[]>(config.url.backUrl + config.url.getProductsPath)
        .subscribe(
          response => { return resolve(response) },
          error => { return reject (error) }

        )
    });
    return promise;

  }
}
