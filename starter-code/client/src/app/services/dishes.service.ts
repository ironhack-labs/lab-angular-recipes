import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json());
  }

  assign(ing_id, dish_id) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dish_id}/ingredients/${ing_id}/add`, ing_id, dish_id)
      .map((ing_id, dish_id) => console.log(ing_id, dish_id));
  }
}
