import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';

import { Dish } from './../models/dish.model';
import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class DishService {
  private static readonly BASE_API: string = environment.apiBase;
  private static readonly DISHES_API: string = `${DishService.BASE_API}/dishes`;
  private static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  private static defaultOptions = new RequestOptions({ headers: DishService.defaultHeaders });

  constructor(
    private http: Http
  ) { }

  list(){
    return this.http.get(DishService.DISHES_API, DishService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  get(id: string): Observable<Dish> {
    return this.http.get(`${DishService.DISHES_API}/${id}`, DishService.defaultOptions)
      .map((res: Response) => res.json())
      .catch((error: Response) => this.handleError(error));
  }

  addIngredient(ingId:string,dishId:string,quantit:string): Observable<Dish> {
    let caden=`${DishService.DISHES_API}/${dishId}/ingredients/${ingId}/add`;
    let quantity={quantity:Number(quantit)};
    return this.http.post(`${DishService.DISHES_API}/${dishId}/ingredients/${ingId}/add`, 
    JSON.stringify(quantity), DishService.defaultOptions)
      // .map((res: Response) =>{
      //   console.log(res);
      //   debugger
      //   res.json();
      // } )
      .catch((error: Response) => this.handleError(error));
  }
  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
