import url from '../../../assets/url.json'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class salesService {

    private config

    constructor() {
        this.config = url
    }
    async getQuotes () {

       const response = await fetch(this.config.backUrl + this.config.getQuotes)
       const r = response.json()
       return r
    }

    async putQuote (id, quote) {
        const response = await fetch(this.config.backUrl + this.config.putQuote + id, quote)
        return response
    }

}