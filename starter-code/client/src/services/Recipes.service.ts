import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {
  BASE_URL:string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getRecipes() {
     return this.http.get(`${this.BASE_URL}/api/dishes`)
       .map((res) => res.json());
   }
   getSingleRecipe(id) {
      return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
        .map((res) => res.json());
    }
   addIngredient(dishId, id, qty) {
     let url = `${this.BASE_URL}/api/dishes/${dishId}/ingredients/${id}/add`;
      return this.http.post(url, {quantity: qty})
        .map((res) => res.json());
   }
}
