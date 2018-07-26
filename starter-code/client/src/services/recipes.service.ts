import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getRecipes(){
    return this.http.get(`${environment.BASE_URL}/api/dishes`)
      .map((res) => res.json());
  }

}
