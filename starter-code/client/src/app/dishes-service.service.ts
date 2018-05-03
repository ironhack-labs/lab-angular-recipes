import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesServiceService {
  constructor(private http: Http) {}
  getDishes() {
    return this.http.get('http://localhost:3000/api/dishes').map(res => res.json());
  }
}
