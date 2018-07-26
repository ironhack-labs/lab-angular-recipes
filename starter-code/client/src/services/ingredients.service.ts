import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class IngredientService {
  constructor(public http: Http) {}
  
  getIngredients(){
    return this.http
      .get("http://localhost:3000/api/ingredients")
      .map(res => {
        return res.json();
      });
  }

  //getRecipe(id){
  //  return this.http
  //    .get(`http://localhost:3000/api/ingredients/${id}`)
  //    .map(res => {
  //      console.log(res);
  //      return res.json();
  //    });
  //}
}