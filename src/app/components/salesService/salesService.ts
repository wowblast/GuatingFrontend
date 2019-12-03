import url from '../../../assets/url.json'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class salesService {

    constructor() {}
    async getQuotes () {

       const response = await fetch(url.backUrl + url.getQoutes)
       console.log(response.json())
       return response.json()
    }

    async putQuote (id, quote) {
        const response = await fetch(url.backUrl + url.putQuote + id, quote)
    }

}