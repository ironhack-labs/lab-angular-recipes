import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const BASEURL = environment.BASEURL;

@Injectable()
export class IngredientService {

  constructor(public http:Http) { }

  getAll(){
    return this.http.get(`${BASEURL}/api/ingredients`).map(res => res.json())
  }

  createIngredient(ingredient: object){
    return this.http.post(`${BASEURL}/api/ingredients`, ingredient);
  }

  addIngredientToRecipe(idDish: string, idIngredient, quantity: number){
    return this.http.post(`${BASEURL}/api/dishes/${idDish}/ingredients/${idIngredient}/add`, {
      quantity: quantity
    })
  }

}
