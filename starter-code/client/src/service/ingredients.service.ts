import {Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class IngredientsService{
   BASE_URL:string = environment.baseURL;

   constructor(private http: Http) {}


   get(id) {
     return this.http.get(`${this.BASE_URL}/api/ingredients`)
       .map((res) => res.json());
   }

//    edit(dishes) {
//      return this.http.put(`${this.BASE_URL}/api/dishes/${dishes.id}`, dishes)
//        .map((res) => res.json());
//    }
//
//    remove(id) {
//      return this.http.delete(`${this.BASE_URL}/api/dishes/${id}`)
//        .map((res) => res.json());
//    }
}
