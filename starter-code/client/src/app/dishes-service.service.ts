import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesServiceService {
  BASE_URL: string = "http://localhost:3000"
  constructor(private http: Http) {}
  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`).map(res => res.json());
  }
  getOne(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`).map(res => res.json());
  }

  addIngredient(dishId, ingredientId, quantity) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity}).map(res => res.json);
  }
}
