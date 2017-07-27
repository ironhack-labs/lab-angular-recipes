import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get('http://localhost:3000/api/dishes')
      .map((res) => res.json());
    }

  get(id){
    return this.http.get(`http://localhost:3000/api/dishes/${id}`)
      .map((res) => res.json());
  }
  }
