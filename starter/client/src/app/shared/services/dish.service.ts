import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
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


  private handleError(error: Response): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}
