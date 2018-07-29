import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../environments/environment'


@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients(){
    return this.http.get(`${environment.BASEURL}/api/ingredients`)
      .map(res => {
        console.log(res); 
        return res.json()
      })
  }

  addIngredient(recipeId, ingredientId, quantity){
    console.log(ingredientId)
    console.log(quantity)
      return this.http.post(`${environment.BASEURL}/api/dishes/${recipeId}/ingredients/${ingredientId}/add`, {quantity})
        .map(res => res.json())
    }
  

  

}
