import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Client} from '../models/Client';
import config from '../../../assets/config.json';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  emptyClients: Observable<Client>
  constructor(private http: HttpClient) { }
  
  getClients () {

    var promise = new Promise((resolve, reject) => {
      this.http.get<Client[]>(config.url.backUrl+config.url.getClientsPath)
        .subscribe(
          response => { return resolve(response)}, 
          error => {return reject(error)}
          
        )
    });
    return promise;
  }
}
