import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

const Url = environment.baseUrl;

export interface Recipe {
  name: string,
  image: string,
  description: string,
  ingredientes: Array<string>
}

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getDish() {
    return this.http.get(`${Url}/api/dishes`).map(res => res.json());
  }
  getById(id: string) {
    return this.http.get(`${Url}/api/dishes/${id}`).map(res => res.json());
  }
  addIngredientToDish(dishId: string, id: string, quantity) {
    return this.http
      .post(`${Url}/api/dishes/${dishId}/ingredients/${id}/add`, { quantity })
      .map(res => res.json());
  }
  addDish(newDish) {
    return this.http.post(`${Url}/api/dishes/`, newDish).map(res => res.json());
  }
}