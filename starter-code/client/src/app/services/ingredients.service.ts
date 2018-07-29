import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {environment} from "environments/environment";
import "rxjs/add/operator/map";

const BASE_URL=environment.BASE_URL;

@Injectable()

export class IngredientsService {
    constructor(private http: Http){}
        
       getIngredients(){
           return this.http.get(`${BASE_URL}/api/ingredients`).map (res=>res.json());
       } 
       getIngredientById (id: string){
           return this.http.get(`${BASE_URL}/api/ingredients/${id}`).map(res =>res.json());
       }
       addIngredient(ingredient){
           return this.http.post(`${BASE_URL}/api/ingredient/`,ingredient)
           .map(res => res.json());
       }
    }
