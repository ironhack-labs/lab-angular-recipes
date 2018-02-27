import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response} from '@angular/http'

@Injectable()
export class DishesService {

  API_URL ='http://localhost:3000/api'

  constructor(private http: Http) { }

  getList() :Promise<any> {
    return this.http.get(`${this.API_URL}/dishes`)
    .toPromise()
    .then((res: Response) => res.json())
  }
  getRecipe(id) :Promise<any> {
    return this.http.get(`${this.API_URL}/dishes/${id}`)
     .toPromise()
     .then((res: Response) => res.json())
  }
  addIngredientToRecipe(ingredientId, qty, recipeId): Promise<any> {
    return this.http.post(`${this.API_URL}/dishes/${recipeId}/ingredients/${ingredientId}/add`, {quantity: qty})
    .toPromise()
    .then((res: Response) => res.json());
  }

}
