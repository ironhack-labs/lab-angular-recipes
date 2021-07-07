import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'


@Injectable()
export class DishesService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

    // GET /api/phones
    getDishes() {
      // return the Promise of the request (component will ".then()" & ".catch()")
      return this.myHttpServ
      .get("http://localhost:3000/api/dishes")
      .toPromise();
    }

}


export class Dish {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}