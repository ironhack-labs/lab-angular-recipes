import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RecipeService {
  constructor(public http: Http) {}
  
  getList(){
    return this.http
      .get("http://localhost:3000/api/dishes")
      .map(res => {
        return res.json();
      });
  }

  getRecipe(id){
    return this.http
      .get(`http://localhost:3000/api/dishes/${id}`)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }
  addIngredient(dishId, id, quantity){
    return this.http
      .post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${id}/add`, {quantity})
      .map(res => {
        console.log(res);
        return res.json();
      });
  }
  createRecipe(recipe){
    return this.http
      .post(`http://localhost:3000/api/dishes`, recipe)
      .map(res => {
        console.log(res);
        return res.json();
      });
  }
}