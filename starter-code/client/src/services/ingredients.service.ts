import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ingredientsService {

    constructor(private http: Http) { }

    getIngredients() :Observable<any>{
      return this.http.get('http://localhost:3000/api/ingredients')
        .map((res) => res.json());
     }

     getIngredientById(id) {
       return this.http.get('http://localhost:3000/api/ingredients/'+id)
         .map((res) => res.json());
      }

}
