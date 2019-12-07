import config from '../../../assets/config.json'
import { Injectable } from '@angular/core'
import { resolve } from 'url'

@Injectable({
    providedIn:'root'
})

export class salesService {

    private config

    constructor() {
        this.config = config
    }
    async getQuotes () {
        
        
       return new Promise (async (resolve, reject) => {
        try {
            const response = await fetch(this.config.backUrl + this.config.getQuotes)
            const r = response.json()
            resolve (r)
        } catch (error) {

            console.log (error)
            reject('No se pudo comunicar con el servidor')
        }
    })
    }

    async putQuote (id, quote) {
        return new Promise (async (resolve, reject) => {
            try {
                const response = await fetch(this.config.backUrl + this.config.putQuote + id, {
                    method: 'PUT',
                    body: quote
                })
                resolve (response.json())
            } catch (error) {
                console.log(error)
                reject('No se pudo enviar tu solicitud, error de conexion')
            }
        })
    }

}