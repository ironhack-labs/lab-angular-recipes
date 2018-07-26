import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const { baseUrl } = environment;

interface Ingredient {
  ingredientId: string;
  quantity: number;
}

export interface Recipe {
  _id: string;
  name: string;
  image: string;
  description: string;
  ingredientes: Array<Ingredient>;
}

@Injectable()
export class RecipesService {
  constructor(private http: Http) {}

  getDishes(): Observable<Array<Recipe>> {
    return this.http.get(`${baseUrl}/api/dishes`).map(res => res.json());
  }

  getDish(id): Observable<Recipe> {
    return this.http.get(`${baseUrl}/api/dishes/${id}`).map(res => res.json());
  }

  addIngredient(recipeId: string, ingredientId: string, quantity: number) {
    return this.http
      .post(`${baseUrl}/api/dishes/${recipeId}/ingredients/${ingredientId}/add`, {
        quantity
      })
      .map(res => res.json());
  }
}
