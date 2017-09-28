import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RetrieveService {

  BASE_URL: string = 'http://localhost:3000';
      constructor(private http: Http) {}

      getAll() {
        return this.http.get(`${this.BASE_URL}/api/dishes`)
          .map((res) => res.json());

      }

      get(id) {
        return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
          .map((res) => res.json());
      }

    
      add(quantity){
         //return this.http.delete(`${this.BASE_URL}/api/dishes/${id}/ingredients/${ingredient.id}/add`)
          //.map((res) => res.json());
      }
  }
