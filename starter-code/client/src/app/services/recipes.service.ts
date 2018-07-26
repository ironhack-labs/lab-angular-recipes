import { Injectable } from "../../../node_modules/@angular/core";
import { Http } from "../../../node_modules/@angular/http";
import { environment } from "environments/environment";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

 const BASE_URL=environment.BASE_URL;
 @Injectable()

export class RecipesService{

constructor(public http:Http){}

 getRecipes(){

     return this.http.get(`${BASE_URL}/api/dishes`)
     .map(res =>{
         console.log(res);
         return res.json();
     })
 }
}
 