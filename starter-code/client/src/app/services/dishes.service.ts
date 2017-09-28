import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DishesService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map(res => res.json());
  }
}
