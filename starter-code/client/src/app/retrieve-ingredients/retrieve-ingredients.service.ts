import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieveIngredientsService {

  constructor(private http: Http) { }
  
  getList() {
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
      .pipe(map((res) => res.json()));
  }
  
  // getId(id) {
  //   return this.http.get(`${environment.BASE_URL}/api/ingredients/${id}`)
  //     .pipe(map((res) => res.json()));
  // }

  addIt(dishId, ingredientId, quantity) {
    console.log(`${environment.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity:quantity})
    return this.http.post(`${environment.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity:Number(quantity)})
      .pipe(map((res) => res.json()))
  }

  addIngredient(ingredient){
    return this.http.post(`${environment.BASE_URL}/api/ingredients`, ingredient)
      .pipe(map(res => {
        res.json()
      }))
  }
}