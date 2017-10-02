import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DishInfo } from './interfaces/dish-info';

@Injectable()
export class DishApiService {

  // url of the Database

  baseUrl = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  getDishes() {
    return this.httpThang.get(
      this.baseUrl + '/api/dishes'
    );
  }

  getDishDetails(dishId: string) {
    return this.httpThang.get(
      this.baseUrl + '/api/dishes/' + dishId
    );
  }
}
