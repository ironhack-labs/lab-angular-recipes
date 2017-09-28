import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getRecipes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

  get(id: string) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json());
  }

  postRecipe(recipe: Object) {
    return this.http.post(`${this.BASE_URL}/api/dishes`, recipe)
    .map((res) => res.json());
  }

  postIngredient(dishId: string, ingredientId: string, quantity: string) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, quantity)
      .map((res) => res.json());
  }
}
