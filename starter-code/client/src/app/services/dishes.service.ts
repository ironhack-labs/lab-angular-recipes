import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  API_URL = "http://localhost:3300";

  constructor(private http: Http) { }

  getDishes(): Promise<any> {
    return this.http.get(`${this.API_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json());
  }

  getDish(id): Promise<any> {
    return this.http.get(`${this.API_URL}/api/dishes/${id}`)
    .toPromise()
    .then((res: Response) => res.json());
  }

}
