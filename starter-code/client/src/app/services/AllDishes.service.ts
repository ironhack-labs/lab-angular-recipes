import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../Dish-interface';

@Injectable()
export class AllDishesService {


constructor( private http: Http) { }

 getDishes() {
   return this.http.get("http://localhost:3000/api/dishes")
   .map((res: Response) => res.json());
 }

 getDish(id){
  return this.http.get(`http://localhost:3000/api/dishes/${id}`)
  .map((res: Response) => res.json());
}
getIngredits(){
  return this.http.get('http://localhost:3000/api/ingredients')
  .map((res: Response) => res.json());
}

addIngredients(dish, ingredient,quantity){
  return this.http.post(`http://localhost:3000/api/dishes/${dish}/ingredients/${ingredient}/add`,{quantity})
  .map((res: Response) => res.json());
}

}