import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Dish } from './../models/dish';

@Injectable()
export class RecipesService {

  constructor(private http: Http) {}

  // returns an Observable
  getList() {
    return this.http.get('http://localhost:3000/api/dishes')
      .map((res) => res.json().map((item) => new Dish(item)));
  }

  getOne(id: string) {
    return this.http.get(`http://localhost:3000/api/dishes/${id}`)
      .map((res) => new Dish(res.json()));
  }
  // map((res) => new Dish(res.json()))

}
