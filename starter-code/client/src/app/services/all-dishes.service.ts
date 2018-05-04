import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Dish } from '../dish.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AllDishesService {
  
  BASE_URL = 'http://localhost:3000';
  dish: Array<Dish>;

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map(res => res.json());
  }

  getDish(id) {
    return this.http
      .get(`${this.BASE_URL}/api/dishes/${id}`)
      .map(res => res.json());
  }
}
