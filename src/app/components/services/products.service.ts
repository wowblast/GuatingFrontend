import { Injectable } from '@angular/core';
import config from '../../../assets/config.json';
import { HttpClient} from '@angular/common/http'
import { Product} from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts () {
    
    return this.http.get<Product>(config.url.backUrl+config.url.getProductsPath);
  }
}
