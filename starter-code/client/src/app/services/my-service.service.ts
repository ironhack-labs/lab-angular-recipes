import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Recipe } from '../recipe.interface';

@Injectable()
export class MyServiceService {

BASE_URL = 'http://localhost:3000';
list: Array<Recipe>;

constructor(private http: Http) { }

getList() {
  return this.http
    .get(`${this.BASE_URL}/api/dishes`)
    .map(res => res.json());
}

}
