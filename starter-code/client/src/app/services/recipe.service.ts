import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getRecipes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }
}
