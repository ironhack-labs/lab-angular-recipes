import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Ingredient } from '../ingredient.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AllIngredientsService {
  
  BASE_URL = 'http://localhost:3000';
  ingredient: Array<Ingredient>;

  constructor(private http: Http) { }

  getIngredients(id) {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

  // numberIngredients(id) {
  //   return this.http
  //     .get(`${this.BASE_URL}/api/ingredients/`)
  //     .map(res => res.json());
  // }
}
