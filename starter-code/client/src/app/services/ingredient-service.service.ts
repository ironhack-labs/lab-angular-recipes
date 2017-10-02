import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class IngredientServiceService {
  baseUrl: string = "http://localhost:3000"
  constructor(
    private http: HttpClient
  ) { }

  getIngredients(){
    return this.http.get(`${this.baseUrl}/api/ingredients`)
  }
  addIngredient(incomingIng){
    const {recipeId, ingId, qty} = incomingIng;
    // const recipeId = incomingIng.recipeId;
    // const ingId = incomingIng.ingId;
    // const qty = incomingIng.qty;
        return this.http.post(`${this.baseUrl}/api/dishes/${recipeId}/ingredients/${ingId}/add`, {quantity: qty})
  }
}
