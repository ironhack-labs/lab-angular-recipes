import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // POST /api/dishes

  // GET /api/dishes
  getList() {
    return this.ajaxTruc
      .get('http://localhost:3000/api/dishes')
      .toPromise();
  }
  // GET /api/dish/:dishId
  getDetails(dishId) {
    return this.ajaxTruc
      .get(`http://localhost:3000/api/dishes/${dishId}`)
      .toPromise();
  }
  // PUT /api/dish/:dishId

  // DELETE /api/dish/:dishId

}

export class Recipe {
  name: string;
  image: string;
  description: string;
}
