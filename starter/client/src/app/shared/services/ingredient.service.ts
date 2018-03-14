import { Ingredient } from './../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';

import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class IngredientService {

  private static readonly BASE_API: string = environment.apiBase;
  private static readonly INGREDIENTS_API: string = `${IngredientService.BASE_API}/ingredients`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: IngredientService.defaultHeaders });
  

  constructor(
    private http: Http
  ) { }

  list(){
    return this.http.get(IngredientService.INGREDIENTS_API, IngredientService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }


  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }
}
