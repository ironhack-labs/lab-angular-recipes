import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientsService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  getIngredients(dishId) {
    return this.ajaxTruc
      .get(`http://localhost:3000/api/ingredients/${dishId}`)
      .toPromise();
  }
}

export class Ingredient {
  name: string;
  description: string;
  image: string;
}