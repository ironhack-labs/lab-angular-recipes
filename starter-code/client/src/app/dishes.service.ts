import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  getList() {
    return this.ajaxTruc.get('http://localhost:3000/api/dishes').toPromise();
  }

  getDetails(dishesId){
    return this.ajaxTruc
    .get(`http://localhost:3000/api/dishes/${dishesId}`)
    .toPromise();
  }
}

export class Dishes {
  name: string;
  image: string;
  description: string;
}
