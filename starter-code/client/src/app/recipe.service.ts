import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  getRecipesList():Observable<any> {
    return this.http.get('http://localhost:3000/api/dishes')
    .map(res => res.json());
  }

  // getSingleRecipe(id):Observable<any> {
  //   return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
  //   .map(res => res.json());
  // }

}
