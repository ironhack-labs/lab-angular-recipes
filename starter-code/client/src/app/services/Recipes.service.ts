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
      .map(res =>{ 
        return res.json()})
  }

  getAllIngredients(){
    console.log('entra')
    return this.http.get(`${BASEURL}/api/ingredients`)
      .map(res => {console.log('res'); return res.json()})
  }

  addIngredient(Dishid:string, id:string, ingredient: object){
    return this.http.post(`${BASEURL}/api/dishes/${Dishid}/ingredients/${id}/add`, ingredient)
      .map(res =>{
        return res.json()})
  }
}
