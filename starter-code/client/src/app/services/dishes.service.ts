import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; // similar to promises, but more power
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(this.baseUrl + `/api/dishes`)
      .map(res => res.json());
  }

  getDish(id) {
    return this.http.get(this.baseUrl + `/api/dishes/${id}`)
     .map(res => res.json());
  }

}
