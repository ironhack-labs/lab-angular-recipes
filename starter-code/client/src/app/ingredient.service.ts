import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class IngredientService {
    BASE_URL: string = "http://localhost:3000/api/";
    constructor(private http: Http) {}
    getAllIngredients() {
        return this.http
          .get(`${this.BASE_URL}/ingredients`)
          .map((res: Response) => res.json());
      }
      addIngredient(dishId, ingId, quantity){
   return this.http
          .post(`${this.BASE_URL}dishes/${dishId}/ingredients/${ingId}/add`, {quantity})
          .map((res: Response) => res.json());
      }
}
