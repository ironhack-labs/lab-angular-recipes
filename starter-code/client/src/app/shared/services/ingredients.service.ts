import { Ingredient } from '../models/ingredient.model';
import { environment } from './../../../environments/environment.prod';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IngredientsService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly INGREDIENTS_API = `${IngredientsService.BASE_API}/api/ingredients`;
  private static defaultHeaders: Headers = new Headers({ 'Content-type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: IngredientsService.defaultHeaders });

  constructor(
    private http: Http
  ) { }

  list(): Observable<Array<Ingredient>> {
    return this.http.get(IngredientsService.INGREDIENTS_API, IngredientsService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  handleError(error: Response): Observable<any> {
    if(!environment.production) {
      console.error(`Ingredient service error: ${error.json()}`);
    }
    return Observable.throw(error.json());
  }

}
