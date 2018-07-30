import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'
@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients(){
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
    .map((res) => res.json());
  }

addIngredient(idD,idI,quantity){
  console.log(`${environment.BASE_URL}/api/dishes/${idD}/ingredients/${idI}/add`,{quantity})
  return this.http.post(`${environment.BASE_URL}/api/dishes/${idD}/ingredients/${idI}/add`,{quantity})
  .map((res) => res.json());
}

createIngredient(ingredient) {
  return this.http.post(`${environment.BASE_URL}/api/ingredients/`, ingredient).map(res => res.json());
}
}
