import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const { baseUrl } = environment;

export interface Ingredient {
  name: string
}

@Injectable()
export class IngredientsService {

    constructor(private http: Http) { }

    getIngredients():Observable<Array<Ingredient>> {
      return this.http.get(`${baseUrl}/api/ingredients`).map((res) => res.json());
    }
    
}