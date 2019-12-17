import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Quote} from '../models/Quote';
import config from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }


    postQuote (quote: Quote) {

    var promise = new Promise((resolve, reject) => {
      return this.http.post<Quote>(config.url.backUrl+config.url.putQuotePath, quote)
      .subscribe(
          response => {return resolve(response) },
          error => { return reject(error) }

        )
    });
    return promise;

    }
    
}
