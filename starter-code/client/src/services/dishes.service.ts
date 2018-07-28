import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const { BASEURL } = environment;

interface Ingredient {
  ingredientId: string;
  quantity: number;
}

export interface Dish {
  _id?: string;
  name: string;
  image?: string;
  description?: string;
  ingredients: Array<Ingredient>;
}

@Injectable()
export class dishesService {

  constructor(public http: Http){ }

  getDishesList(){
    return this.http.get(`${environment.BASEURL}/api/dishes/`)
    .map((res) => res.json());
  }
  getOneDish(id : string){
    return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
    .map((res) => res.json()); 
  }
  addIngredient(dishId : string, ingredientId : string, quantity : number){
    return this.http
      .post(`${environment.BASEURL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity})
      .map((res)=> res.json());
  }

}