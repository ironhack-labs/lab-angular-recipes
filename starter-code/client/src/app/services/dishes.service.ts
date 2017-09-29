import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
  BASE_URL: String = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map(res => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
    .map(res => res.json());
  }

}
