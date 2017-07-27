import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DishesService{
BASE_URL:string = environment.baseURL;

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json())
  }

  getDish(id) {
     return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
       .map((res:Response) => { return res.json() });  // return Observable<response>
   }
}
