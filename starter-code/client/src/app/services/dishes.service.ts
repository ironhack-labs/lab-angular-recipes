import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs";
import * as _ from "underscore";

import { Dish } from "../list-interface";
import { Ingredients } from "../ingredients-interface";

@Injectable()
export class DishesService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}
  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`).map(res => res.json());
  }
  getDish(idDish) {
    return this.http
      .get(`${this.BASE_URL}/api/dishes/${idDish}`)
      .map(res => res.json());
  }
  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }
  addIngredient(myQuantityvalue, dish_id, i_id) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dish_id}/ingredients/${i_id}/add`, {myQuantityvalue})
      .map((res) => res.json());
  }
}
