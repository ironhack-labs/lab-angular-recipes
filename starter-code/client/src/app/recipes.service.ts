import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';

@Injectable()
export class RecipesService {
  constructor(private http:Http) {}

  getRecipes() {
    return this.http.get(`${environment.BASE_URL}/api/dishes`)
    .map((res)=>res.json());
  }

  getRecipeById(id:string) {
    return this.http.get(`${environment.BASE_URL}/api/dishes/${id}`)
    .map((res)=>res.json());
  }

  addIngredientToRecipe(id: string, ingredientId: string, quantity: number) {
    const postData = {
      quantity
    }
    return this.http.post(`${environment.BASE_URL}/api/dishes/${id}/ingredients/${ingredientId}/add`, postData)
  }

  newRecipe(name: string, image: string, description: string) {
    const postData = {
      name,
      image,
      description
    }
    return this.http.post(`${environment.BASE_URL}/api/dishes`, postData)
    .map((res) => console.log(res.json()))
  }

  newIngredient(name: string) {
    const postData = {
      name
    }
    return this.http.post(`${environment.BASE_URL}/api/ingredients`, postData)
    .map((res) => console.log(res.json()))
  }
}
