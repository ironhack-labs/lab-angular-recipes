import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class IngredientsService {
  BASE_URL: String = "http://localhost:3000";

  constructor(private http: Http) {}

  getIngredientsList(): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

  // getSingleIngredients(id):Observable<any> {
  //     return this.http.get(`http://localhost:3000/api/ingredients/${id}`)
  //     .map(res => res.json());
  // }

  addIngredient(id_Ing, id_Dish) {
    return this.http
      .post(`${this.BASE_URL}/api/dishes/${id_Dish}/ingredients/${id_Ing}/add`,{})
      .map(res => res.json());
  }
}
