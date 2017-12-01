import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/dishes";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class RecipeService {
  constructor(private http: Http) {}

  getRecipeList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  getRecipeByID(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }
  //
  // deleteRecipe(id){
  //     return this.http.delete(`${BASEURL}/${id}`)
  //                     .map(res => res.json());
  // }

}
