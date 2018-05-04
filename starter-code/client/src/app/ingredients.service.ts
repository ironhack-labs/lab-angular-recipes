import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class IngredientsService {
    BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}
  
    getIngredients() {
      return this.http.get(`${this.BASE_URL}/api/ingredients`)
        .map((res) => res.json());
    }

    addIngredient(id, dish) {
        return this.http.post(`${this.BASE_URL}/api/ingredients`,{ingredient_id:id, dish_id:id, })
          .map((res) => res.json());
      }

    }



