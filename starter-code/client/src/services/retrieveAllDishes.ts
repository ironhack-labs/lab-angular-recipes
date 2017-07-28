import  { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListRecipes {

  constructor(public http : Http) {}

  getRecipies(){
    return this.http.get('http://localhost:3000/dishes').map((res) => res.json());
  }
}
