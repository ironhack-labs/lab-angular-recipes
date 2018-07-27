import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class recipesService {
  constructor(public http: Http) {}

  getRecipes() {
    return this.http.get("http://localhost:3000/api/dishes").map(res => {
      console.log(res);
      return res.json();
    });
  }

  getRecipe(id) {
    return this.http.get(`http://localhost:3000/api/dishes/${id}`).map(res => {
      console.log(res);
      return res.json();
    });
  }

  addIngredient(recipeId, ingredientId, quantity: number) {
    console.log(recipeId);
    console.log(ingredientId);
    console.log(quantity);
    return this.http
      .post(
        `http://localhost:3000/api/dishes/${recipeId}/ingredients/${ingredientId}/add`,
        { quantity }
      )
      .map(res => res.json());
  }

  newRecipe(recipe) {
    return this.http
      .post("http://localhost:3000/api/dishes", recipe)
      .map(res => res.json());
  }
}
