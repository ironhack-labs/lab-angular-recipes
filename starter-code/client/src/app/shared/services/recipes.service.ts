import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RecipesService {
  private static readonly BASE_API = environment.baseApi;
  private static readonly RECIPES_API = `${RecipesService.BASE_API}/api/dishes`;
  private static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions: RequestOptions = new RequestOptions({ headers: RecipesService.defaultHeaders })

  constructor(private http: Http) { }

  list(): Observable<Array<Recipe>> {
    return this.http.get(RecipesService.RECIPES_API, RecipesService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Recipe> {
    return this.http.get(`${RecipesService.RECIPES_API}/${id}`, RecipesService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  addIngredient(dishId: string, ingredientId: string): Observable<Recipe> {
    return this.http.post(`${RecipesService.RECIPES_API}/${dishId}/ingredients/${ingredientId}/add`, RecipesService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));

  }

  handleError(error: Response): Observable<any> {
    if(!environment.production) {
      console.error(`Recipe Service error: ${error.json()}`);
    }
    return Observable.throw(error.json());
  }

}
