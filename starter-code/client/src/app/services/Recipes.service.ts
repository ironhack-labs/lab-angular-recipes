import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

const BASEURL = 'http://localhost:3000'
@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getAllRecipes(){
    return this.http.get(`${BASEURL}/api/dishes`)
      .map(res => res.json())
  }

  getRecipesById(id:string){
    return this.http.get(`${BASEURL}/api/dishes/${id}`)
      .map(res => res.json())
  }
}
