import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class IngredientsService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getIngredientsList() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res: Response) => res.json());
  }

  add(ingredient) {
    return this.http.post(`${this.BASE_URL}/api/ingredients`, ingredient)
      .map((res) => res.json());
  }

}
