import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class IngredientsServicesService {

  BASE_URL: string = 'http://localhost:3000';

constructor(private http: Http) { }

getIngredients(id) {
  return this.http.get(`${this.BASE_URL}/api/ingredients`)
    .map((res) => res.json());
}
saveIngredients(id,ingredient_id, quantity) {
  console.log(id,ingredient_id, quantity)
return this.http.post(`${this.BASE_URL}/api/dishes/${id}/ingredients/${ingredient_id}/add`,{quantity})
.map((res) => res.json())
}


}