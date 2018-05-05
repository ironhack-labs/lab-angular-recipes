import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class RetrieveService {

  constructor(private http: Http) { }

  BASE_URL: string = 'http://localhost:3000'

  getDishes(): Observable<object> {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

  getOneDish(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json());
  }

}
