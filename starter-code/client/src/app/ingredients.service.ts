import { Injectable } from "@angular/core";
import { Ingredients } from "./ingredients-interface";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs";

@Injectable()
export class IngredientsService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

  aIngredient(quantity, recipe, ingredient) {
    return this.http
      .post(
        `${this.BASE_URL}/api/dishes/${recipe}/ingredients/${ingredient}/add`,
        { quantity }
      )
      .map(res => res.json());
  }
}
