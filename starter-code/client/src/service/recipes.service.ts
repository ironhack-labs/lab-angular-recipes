import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class RecipesService{
   BASE_URL:string = environment.baseURL;

   constructor(private http: Http) {}

   getList() {
     return this.http.get(`${this.BASE_URL}/api/dishes`)
       .map((res) => res.json());
   }

   get(id) {
     return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
       .map((res) => res.json());
   }

   edit(dishes) {
     return this.http.put(`${this.BASE_URL}/api/dishes/${dishes.id}`, dishes)
       .map((res) => res.json());
   }

   remove(id) {
     return this.http.delete(`${this.BASE_URL}/api/dishes/${id}`)
       .map((res) => res.json());
   }
   addIngredient(dishId, id, qty) {
     let url = `${this.BASE_URL}/api/dishes/${dishId}/ingredients/${id}/add`;
       return this.http.post(url, {quantity: qty})
         .map((res) => res.json());
    }
}
