import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const backendUrl = 'http://localhost:3000';

@Injectable()
export class DishApiService {

  constructor(
    private myHttpServ: HttpClient
  ) { }

  getDishes() {
    return this.myHttpServ
    .get(`${backendUrl}/api/dishes`)
    .toPromise();
  }

  getDisheDetails(id) {
    return this.myHttpServ
    .get(`${backendUrl}/api/dishes/${id}`)
    .toPromise();
  }
}

export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  ingredients: Array<string>;
}
