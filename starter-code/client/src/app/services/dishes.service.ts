import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DishesService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList():Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json());
  }

  getSingleEntry(entryId):Promise<any> {
    return this.http.get(`${this.BASE_URL}/api/dishes/${entryId}`)
    .toPromise()
    .then((res: Response) => res.json());
  }

  addIngredient(dishId, ingId, quantity) {
    return this.http.post(`${this.BASE_URL}/api/dishes/${dishId}/ingredients/${ingId}/add`, {quantity})
    .toPromise()
    .then((res: Response) => res.json());
  }

}
