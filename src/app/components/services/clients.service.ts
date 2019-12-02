import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Client} from '../models/Client';
import config from '../../../assets/config.json';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  constructor(private http: HttpClient) { }
  
  getClients () {
    
    return this.http.get<Client>(config.url.backUrl+config.url.getClientsPath);
  }
}
