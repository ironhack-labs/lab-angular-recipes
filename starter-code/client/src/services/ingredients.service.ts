import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients() {
    return this.http.get('http://localhost:3000/api/ingredients')
      .map((res) => res.json());
    }



  }
