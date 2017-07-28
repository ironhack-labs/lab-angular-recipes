import  { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RecetsService {
  constructor (private http : Http) {}

  getRecipes() {
    return this.http.get('http://localhost:3000/dishes').map((res) => res.json());
 }

 getRecipe(id) {
   return this.http.get(`http://localhost:3000/api/dishes/${id}`).map((res) => res.json());
}

getIngredients() {
  return this.http.get('http://localhost:3000/dishes').map((res) => res.json());
}

}
