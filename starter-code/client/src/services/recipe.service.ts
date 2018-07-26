import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class RecipeService {
  constructor(private http: Http) {}

  getRecipes() {
    return this.http.get(`${environment.BASE_URL}/api/dishes`)
      .map((res) => {return res.json()});
  }

  getRecipe(id) {
    return this.http.get(`${environment.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json());
  }
  
}