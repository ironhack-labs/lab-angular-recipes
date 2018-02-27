import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as _ from 'underscore';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishService {

  dishes = Array<any>();

  API_URL = 'http://localhost:3000/api'

  constructor( private http: Http) { }

  getList(): Promise<any> {

    return this.http.get(`${this.API_URL}/dishes`)
      .toPromise()
      .then((res: Response) => res.json())

  }

  getDish(id): Promise<any>  {
    return this.http.get(`${this.API_URL}/dishes/${id}`)
    .toPromise()
    .then((res: Response) => res.json())
   }
  }

