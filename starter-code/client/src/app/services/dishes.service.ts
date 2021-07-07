import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const BASEURL = environment.BASEURL;

@Injectable()
export class DishesService {

  constructor(public http: Http) { }

  getAll() {
    return this.http.get(`${BASEURL}/api/dishes`).map(res => res.json());
  }

  getDishById(id:string) {
    return this.http.get(`${BASEURL}/api/dishes/${id}`).map(res => res.json());
  }

  createDish(dish: object) {
    return this.http.post(`${BASEURL}/api/dishes`, dish);
  }
}
