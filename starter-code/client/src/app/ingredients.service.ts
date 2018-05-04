import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  BASE_URL: string = 'http://localhost:3000'

  getIngredients(): Observable<object> {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res) => res.json());
  }

}
