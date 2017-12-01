import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/dishes";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  getAllRecipes():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }

  getOneRecipes(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                      .map(res => res.json());
  }

  insertIngredientInDish(ingredientId,dishId,quantity):Observable<any>{
    return this.http.post(`${BASEURL}/${dishId}/ingredients/${ingredientId}/add`, { quantity: quantity })
                    .map(res => res.json());
    }

  addNewDish(data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    var body = "name=" + data.name + "&image=" + data.image + "&description="+ data.description;
    this.http.post(BASEURL,body,options).subscribe(res => res.json());
  }
}
