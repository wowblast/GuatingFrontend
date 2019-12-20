import config from '../../../assets/config.json'
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { resolve } from 'url'
import axios from "axios";


@Injectable({
    providedIn:'root'
})

export class salesService {

  private config

    constructor(private http:HttpClient) {
        this.config = config;
    }
    async getQuotes () {
        return new Promise((resolve, reject) => {
            return this.http.get<any>(this.config.backUrl + this.config.getQuotes).subscribe(
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
          })
    }

    async putQuote (id, quote) {
        return new Promise((resolve, reject) => {
            return this.http.put<any>(this.config.backUrl + this.config.putQuote + id, quote).subscribe(
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
          })
    }

}