import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';


@Injectable()
export class RetrieveDishesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

  show(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/$(id)`)
      .map((res) => res.json());
  }
}
