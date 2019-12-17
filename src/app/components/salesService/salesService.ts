import config from '../../../assets/config.json'
import { Injectable } from '@angular/core'
import { resolve } from 'url'
import axios from "axios";


@Injectable({
    providedIn:'root'
})

export class salesService {

  private config

    constructor() {
        this.config = config;
    }
    async getQuotes () {
        return new Promise((resolve, reject) => {
            axios.get(this.config.backUrl + this.config.getQuotes)
              .then(response => { resolve(response.data) })
              .catch(error => { console.log(error); reject(error) })
          })
    }

    async putQuote (id, quote) {
        return new Promise((resolve, reject) => {
            axios.put(this.config.backUrl + this.config.putQuote + id, quote)
              .then(response => { resolve(response.data) })
              .catch(error => { console.log(error); reject(error) })
          })
    }

}