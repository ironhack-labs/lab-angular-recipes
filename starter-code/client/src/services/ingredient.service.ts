import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IngredientService{
  ingredients: Array<any> = [];

  constructor(public http: Http){
    this.getIngredients().subscribe();
  }

  getIngredients():Observable<any>{
    return this.http.get('http://localhost/api/ingredients');
      map((res:Response) => {
        this.ingredients = res.json();
        return this.ingredients;
      });
  }

  getIngredient(id): any{
    return this.ingredients.find(e =>
      e._id === id
    )
  }

  addIngredientToDish(quantity: number, ingredientId, dishId): any{
    this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity})
    map((res:Response) => {
      const dish = res.json()
      return dish;
    })
  }
}
