import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment.prod';

const BASEURL = environment.BASEURL;

@Injectable()
export class DishesService {
  
  constructor(public http: Http) {}

  getAllDishes() {
    return this.http.get('${BASEURL}/api/dishes').map(res => res.json());
  }

  getOneDish() {
    return this.http.get('${BASEURL}/api/dishes/${id}').map(res => res.json());
  }
}