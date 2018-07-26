import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import 'rxjs/add/operator/map'

const url = environment.BASEURL;

@Injectable()
export class DishesService {
  constructor(private http: Http) {}
  getAll() {
    return this.http.get(`${url}/api/dishes`).map(res => res.json());
  }
  getById(id:string) {
    return this.http.get(`${url}/api/dishes/${id}`).map(res => res.json());
  }
  addIngredientToDish(dishId:string,id:string, quantity){
    return this.http.post(`${url}/api/dishes/${dishId}/ingredients/${id}/add`,{quantity}).map(res => res.json());
  }
 
}