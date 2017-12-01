import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IIngredient } from '../interfaces/ingredient';

@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients():Observable<IIngredient[]>{
    return this.http.get(environment.INGREDIENTS_API_URL)
      .map(res => <IIngredient[]>res.json());
  }

}
