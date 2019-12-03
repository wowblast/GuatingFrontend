import url from '../../../assets/url.json'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class salesService {

    constructor() {}
    async getQuotes () {

       const response = await fetch('http://192.168.0.17:5000/crm-api/quotes')
       const r = response.json()
       return r
    }

    async putQuote (id, quote) {
        const response = await fetch(url.backUrl + url.putQuote + id, quote)
    }

}