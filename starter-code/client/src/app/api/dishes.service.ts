import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'

const backendUrl = "http://localhost:3000";

@Injectable()
export class DishesService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getDishes(){
    return this.myHttpServ
      .get(`${backendUrl}/api/dishes`)
      .toPromise();
  }

  getDishItem(id){
    return this.myHttpServ
      .get(`${backendUrl}/api/dishes/${id}`)
      .toPromise();
  }

  addDish(dishInfo: DishForm){
    return this.myHttpServ
      .post(`${backendUrl}/api/dishes`, dishInfo)
      .toPromise();
  }

  addIngredientToDish(dishId, id, quantity){
    return this.myHttpServ
      .post(`${backendUrl}/api/dishes/${dishId}/ingredients/${id}/add`, { quantity })
      .toPromise();
  }
}

export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  ingredients: Array<any>;
}

export class DishForm {
  name: string;
  description: string;
  image: string;
  ingredients: Array<any> = [];
}

export class ingredientSubmission {
  id: string;
  quantity: number;
}