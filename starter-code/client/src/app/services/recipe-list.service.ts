import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeListService {

  constructor(private http: Http) { }

  getRecipeList():Observable<any> {
    return this.http.get('http://localhost:3000/api/dishes')
                    .map(res => res.json());
  }

  getSingleRecipe(id):Observable<any> {
    return this.http.get(`http://localhost:3000/api/dishes/${id}`)
                    .map(res => res.json());
  }
}
