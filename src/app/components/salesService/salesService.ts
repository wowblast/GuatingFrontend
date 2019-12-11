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
              .catch(error => { console.log(error); reject('No se pudo comunicar con el servidor') })
          })
        
       /*return new Promise (async (resolve, reject) => {
        try {
            const response = await fetch(this.config.backUrl + this.config.getQuotes)
            const r = response.json()
            resolve (r)
        } catch (error) {

            console.log (error)
            reject('No se pudo comunicar con el servidor')
        }
    })*/
    }

    async putQuote (id, quote) {
        return new Promise((resolve, reject) => {
            axios.put(this.config.backUrl + this.config.putQuote + id, quote)
              .then(response => { resolve(response.data) })
              .catch(error => { console.log(error); reject('No se pudo enviar tu solicitud, error de conexion') })
          })
        /*return new Promise (async (resolve, reject) => {
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
        })*/
    }

}