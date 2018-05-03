import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class RetrieveDishService {

constructor(private route: ActivatedRoute, private http: Http) { }

getDishes() {
  return this.http.get('http://localhost:3000/api/dishes/')
    .map((res) => res.json());
}

getOneDish(id) {
  return this.http.get(`http://localhost:3000/api/dishes/${id}`)
  .map((res) => res.json());
}
addOneIngredient(dishId, ingredientId, quantity){
  return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`,{quantity})
  .map((res) => res.json());

}

}
