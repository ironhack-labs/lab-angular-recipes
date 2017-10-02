import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Ingredient } from './../models/ingredient';
@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }


  getList() {
    return this.http.get('http://localhost:3000/api/ingredients')
      .map((res) => res.json().map((item) => new Ingredient(item)));
  }

  addOne(newIngredient){
    return this.http.post('http://localhost:3000/api/ingredients', {newIngredient});
  }

  addNew(newIngredient: Object) {

    return this.http.post(`http://localhost:3000/api/ingredients`, newIngredient)
      .map((res) => new Ingredient(res.json()));
  }

}
