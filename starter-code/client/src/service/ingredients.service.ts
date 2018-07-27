import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ingredientsService {
  constructor(public http: Http) {}

  getIngredients() {
    return this.http
      .get(`http://localhost:3000/api/ingredients`)
      .map(res => res.json());
  }

  newIngredient(ingredient){
    return this.http
      .post(`http://localhost:3000/api/ingredients`, ingredient)
      .map(res => res.json());
  }
}
