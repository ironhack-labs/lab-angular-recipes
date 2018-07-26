import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../environments/environment";

@Injectable()
export class DishesService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/dishes`).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  get(id) {
    return this.http
      .get(`${environment.BASE_URL}/api/dishes/${id}`)
      .map(res => res.json());
  }
}
