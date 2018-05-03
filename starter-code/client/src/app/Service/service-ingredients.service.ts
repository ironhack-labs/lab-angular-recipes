import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServiceIngredientsService {
  constructor(private http: Http) {}

  BASE_URL: string = 'http://localhost:3000';

  getIng(){
    return this.http.get(`${this.BASE_URL}/api/ingredients`).map(res => res.json());
  
  }

  postElement(dishId, ingredientsId, quantity) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${ingredientsId}/add`, {quantity}).map(res => res.json());
  }
}
