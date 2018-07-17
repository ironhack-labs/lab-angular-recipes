import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise'

const backendUrl = "http://localhost:3000/api";

@Injectable()
export class IngredientService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getIngredients(){
    return this.myHttpServ
      .get(`${backendUrl}/ingredients`)
      .toPromise();
  }

  postIngredients(ingredientInfo: ingredientForm){
    return this.myHttpServ
      .post(`${backendUrl}/ingredients`, ingredientInfo)
      .toPromise();
  }

}

export class Ingredient {
  name: string;
  description: string;
  image: string;
}

export class ingredientForm {
  name: string;
  description: string;
  image: string;
}