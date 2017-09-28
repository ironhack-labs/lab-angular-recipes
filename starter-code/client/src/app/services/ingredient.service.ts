import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getIngredients() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/ingredients/${id}`)
      .map((res) => res.json());
  }

  postNewIngredient(ingredient) {
    console.log(ingredient);
    return this.http.post(`${this.BASE_URL}/api/ingredients`, ingredient)
    .map((res) => res.json());
  }
}
