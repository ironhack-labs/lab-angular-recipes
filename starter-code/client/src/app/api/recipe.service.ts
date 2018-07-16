import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/toPromise";

const backendUrl = "http://localhost:3000";

@Injectable( )

export class RecipeService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  // GET /api/list of dishes (recipes)
  getList() {
    // return the Pormise of the request (component will ".then" & ".catch")
    return this.myHttpServ
      .get(`${backendUrl}/api/dishes`)
      .toPromise()
  }

 // GET /api/one dish (recipe detail)
  getRecipeItem(_id) {
  // return the Pormise of the request (component will ".then" & ".catch")
  return this.myHttpServ
    .get(`${backendUrl}/api/dishes/${_id}`)
    .toPromise()
}

// GET /api/one ingredient (dish detail)
  
}

export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  ingredients: Array<string>;
  quantity: number;
}
