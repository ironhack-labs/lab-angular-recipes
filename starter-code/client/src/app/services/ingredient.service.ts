import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: Http
  ) { }

  getIngredients(){
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
      .pipe(map(res => res.json()))
  }

  addIngredient(quantity, ingredientId, dishId){
    return this.http.post(`${environment.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity:quantity})
      .pipe(map(res => {
        console.log(res.json())
        res.json()
      }))
  }

  createIngredient(body){
    return this.http.post(`${environment.BASE_URL}/api/ingredients`, body)
      .pipe(map(res => {
        res.json()
      }))
  }
}
