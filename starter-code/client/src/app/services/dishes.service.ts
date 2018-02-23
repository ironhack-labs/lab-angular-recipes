import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DishesService {

  API_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getDish(): Promise<any>  {
    return this.http.get(`${this.API_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json())
  }

  getSingleDish(id): Promise<any>  {
    return this.http.get(`${this.API_URL}/api/dishes/${id}`)
    .toPromise()
    .then((res: Response) => res.json())
  }

  addIngredientToDish(ingredientID, qty, recipeID): Promise<any> {
      return this.http
        .post(`${this.API_URL}/api/dishes/${recipeID}/ingredients/${ingredientID}/add`, {quantity: qty})
        .toPromise()
        .then((res: Response) => res.json());
    }

}
