import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/dishes";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getAllRecipes():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }

  getOneRecipes(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  insertIngredientInDish(ingredientId,dishId,quantity):Observable<any>{
    return this.http.post(`${BASEURL}/${dishId}/ingredients/${ingredientId}/add`, { quantity: quantity })
                    .map(res => res.json());
    }
}
