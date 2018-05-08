import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  constructor( 
    private ajaxTruc: HttpClient
  ) { }
 
 //get dish

 getList() {
   return this.ajaxTruc 
   .get("http://localhost:3000/api/dishes")
   .toPromise();
 }

}


export class Dish {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt?: Date
}