import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/dishes";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class RecipesService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(BASEURL)
      .map(res => res.json());
  }
}
