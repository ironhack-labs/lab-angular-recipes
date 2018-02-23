import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientsService {

  API_URL = "http://localhost:3300";

  constructor(private http: Http) { }

  getIngredients(): Promise<any> {
    return this.http.get(`${this.API_URL}/api/ingredients`)
    .toPromise()
    .then((res: Response) => res.json());
  }

}
