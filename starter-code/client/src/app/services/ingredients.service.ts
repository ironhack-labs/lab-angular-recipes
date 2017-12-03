import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; // similar to promises, but more power
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientsService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getIngredients() {
    return this.http.get(this.baseUrl + `/api/ingredients`)
      .map(res => res.json());
  }

}
