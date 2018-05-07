import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  getList() {
    return this.ajaxEngine
    .get('http://localhost:3000/api/dishes')
    .toPromise();
  }

  getDetails(dishId) {
    return this.ajaxEngine
    .get(`http://localhost:3000/api/dishes/${dishId}`)
    .toPromise();
  }

}

export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  ingredients:Array<Object>;
  createdAt?: Date; 
  updatedAt?: Date;
}

