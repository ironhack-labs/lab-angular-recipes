import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

import { IDish } from '../interfaces/dish';

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getDishes():Observable<IDish[]>{
      return this.http.get(environment.API_URL)
                      .map(res => <IDish[]>res.json());
  }

}
