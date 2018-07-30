import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {
  baseUrl = 'http://localhost:3000/api/dishes';

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

  retrieveOneById(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }

  // backend API route - POST /api/dishes/:dishId/ingredients/:id/add
  // - body: quantity
  addIngredient(dishId: string, ingredientId: string, quantity: number): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = {
      quantity
    };
    return this.httpClient.post(`${this.baseUrl}/${dishId}/ingredients/${ingredientId}/add`, data, options)
      .toPromise();
  }
}
