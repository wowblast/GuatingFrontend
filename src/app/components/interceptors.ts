import axios from 'axios'

  export default {
    init() {
        axios.interceptors.request.use((config) => {
            console.log('hay algo')
            return config;
          }, (error) => {
            return Promise.reject(error);
          });
        
        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            console.log('hay algo x2')
            return response;
          }, (error) => {
            // Do something with response error
            return Promise.reject(error);
          });
        
    }

  }