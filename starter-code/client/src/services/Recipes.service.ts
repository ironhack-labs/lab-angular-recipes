import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../environments/environment'


@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getAllRecipes(){
    return this.http.get(`${environment.BASEURL}/api/dishes`)
      .map(res => res.json())
  }

  getRecipesById(id){
    return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
      .map(res => res.json())
  }
}
