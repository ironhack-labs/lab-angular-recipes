import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

const backendUrl = "http://localhost:3000";

@Injectable()
export class DishesService {
  constructor(private myHttpServ: HttpClient) {}

  getList() {
    return this.myHttpServ.get(`${backendUrl}/api/dishes`).toPromise();
  }

  getDishItem(id) {
    return this.myHttpServ.get(`${backendUrl}/api/dishes/${id}`).toPromise();
  }
}

export class Dish {
  name: string;
  image: string;
  descrition: string;
  ingredients: Array<string>;
}
