import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'
import { Observable } from '../../node_modules/rxjs/Observable';
@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients():Observable<object>{
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
      .map( res => res.json());
  }

  addIngredient(dishId:string, ingredientId:string, quantity:number):Observable<object>{
    const postData = {quantity: quantity};
    console.log(dishId, ingredientId, postData)
    return this.http.post(`${environment.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, postData)
      .map ( res => res.json());
  }

}
