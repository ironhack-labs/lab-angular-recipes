import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientsService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList(){
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

}
