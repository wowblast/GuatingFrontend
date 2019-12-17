import axios from 'axios'
import configuration from '../../assets/config.json'
import { CompilerConfig } from '@angular/compiler';

  export default {
    init() {
        axios.interceptors.request.use((config) => {
            var token = localStorage.getItem('token');
            if(token){
              config.headers.Authorization = `Bearer ${token}`;
              return config;
            }else{
              window.location.href = configuration.loginPage;
              return null;
            }
          }, (error) => {
            return Promise.reject(error);
          });
        
        axios.interceptors.response.use((response) => {
            return response;
          }, (error) => {
            if(error.response){
              switch(error.response.status){
                case 408:
                  return Promise.reject("Aplication TimeOut: "+ error.response.data.Message);
                  break;
                case 500:
                  return Promise.reject("Internal server error, contact with the administrator");
                break;
                case 401:
                  window.location.href = configuration.loginPage;
                  return Promise.reject("No sesion detected, redirect to login");
                break;
              }
            }
            return Promise.reject("Can't connet to the server");
          });
        
    }

  }