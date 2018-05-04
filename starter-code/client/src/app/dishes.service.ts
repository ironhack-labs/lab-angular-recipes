import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

 export interface Dishes {
    name: string,
    image: string,
     description: string
 }

 export interface Ingredients {
     name: string,
     image: string,
     description: string
 }

@Injectable()
export class DishesService {


constructor(private http: Http) { }

getDishesList(){
    return this.http.get ('http://localhost:3000/api/dishes')
    .map((res)=>res.json());
}

 get(id) {
    return this.http.get('http://localhost:3000/api/dishes/${id}')
      .map((res) => res.json());
  }

   getIngredient(){
       return this.http.get ('http://localhost:3000/api/ingredients')
       .map((res) => res.json());
   }

   addIngredient(dishId, ingId, quantity){
    return this.http.post('http://localhost:3000/api/dishes/${dishId}/ingredients/${ingId}/add', {quantity})
    .map((res: Response) => res.json());
    }
 

}


