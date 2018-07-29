import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from 'interfaces/Ingredient';

@Injectable()
export class IngredientsService {

  showForm: boolean = false;

  constructor(private http: Http) { }

  getIngredients(): Observable<Array<Ingredient>>{
    return this.http.get('http://localhost:3000/api/ingredients').map((res)=>res.json())
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient>{
    return this.http.post('http://localhost:3000/api/ingredients', ingredient)
      .map(res => res.json());
  }

  addToRecipe(dishId, ingredientId, quantity): Observable<Ingredient>{
    return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity}).map((res)=>res.json());
  }


}
