import { Injectable } from '@angular/core';

import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }
  getEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
    .map((res) => res.json());
  }
  createEntry(entry) {
    return this.http.post(`${this.BASE_URL}/api/dishes`, entry)
    .map((res) => [res.json(),
      location.reload()]);
  }
  addIngredient(dishId, ingId, quantity) {
      const quantObj = {
        quantity: quantity
      };
      console.log(quantObj, dishId, ingId);
    return this.http.post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${ingId}/add`, quantObj)
    .map((res) => res.json());
  }
}
