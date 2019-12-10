import config from '../../../assets/config.json'
import { Injectable } from '@angular/core'
<<<<<<< HEAD
import { JsonPipe } from '@angular/common'
=======
import { resolve } from 'url'
>>>>>>> 3f7f0695574bd4f359efd154e5f151a5b6347bf8

@Injectable({
    providedIn:'root'
})

export class salesService {

  private config

<<<<<<< HEAD
  constructor() {
    this.config = url
  }
  async getQuotes () {
    const response = await fetch(this.config.backUrl + this.config.getQuotes)
    const r = response.json()
    return r
  }

  async putQuote (id, quote) {
    const response = await fetch(this.config.backUrl + this.config.putQuote + id, {
      method: 'PUT',
      body: JSON.stringify({
        quote
      })
    })
    return response
  }
=======
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
>>>>>>> 3f7f0695574bd4f359efd154e5f151a5b6347bf8

}