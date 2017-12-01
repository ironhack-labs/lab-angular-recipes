import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class dishesService {

    constructor(private http: Http) { }

    getEntries() {
      return this.http.get('http://localhost:3000/api/dishes')
        .map((res) => res.json());
     }
    getEntry(id){
      return this.http.get(`http://localhost:3000/api/dishes/${id}`)
        .map((res) => res.json());
    }

    addIngredient(dishId,ingreId,quantity){
      console.log("Dishes service Add ingredient");
      const body={quantity : quantity};
        
      return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingreId}/add`,body)
        .map((res) => res.json());
    }
}
