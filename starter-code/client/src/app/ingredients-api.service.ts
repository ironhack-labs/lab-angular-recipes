import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const backendUrl = 'http://localhost:3000';

@Injectable()
export class IngredientsApiService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getIngredients() {
    return this.myHttpServ
    .get(`${backendUrl}/api/ingredients`)
    .toPromise();
  }

  getIngredientDetails(id) {
    return this.myHttpServ
    .get(`${backendUrl}/api/ingredient/${id}`)
    .toPromise();
  }
}

export class Ingredient {
  _id: string;
  name: string;
  description: string;
  image: string;
}
