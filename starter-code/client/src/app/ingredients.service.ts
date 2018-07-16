import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

const backendUrl = "http://localhost:3000";

@Injectable()
export class IngredientsService {
  constructor(private myHttpServ: HttpClient) {}

  getList() {
    return this.myHttpServ.get(`${backendUrl}/api/ingredients`).toPromise();
  }

  addIngredient(dishId, ingredientId, qty) {
    return this.myHttpServ
      .post(
        `${backendUrl}/api/dishes/${dishId}/ingredients/${ingredientId}/add`,
        { qty }
      )
      .toPromise();
  }
}

export class Ingredient {
  name: string;
  description: string;
}

export class IngredientSubmission {
  name: string;
  description: string;
  quantity: number;
}
