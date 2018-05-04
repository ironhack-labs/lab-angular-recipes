import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

export interface Ingredients {
    name: string,
    image: string,
    description: string
}



@Injectable()
export class IngredientsService {
    ingredients: Array <any> = [];

constructor(private http: Http) { }

addIngredient(dishId, ingId, quantity){
    return this.http.post('http://localhost:3000/api/dishes/${dishId}/ingredients/${ingId}/add', {quantity})
  .map((res: Response) => res.json());
    }

}
