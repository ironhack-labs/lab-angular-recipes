import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../environments/environment";


@Injectable()
export class IngredientsService {
  constructor(private http: Http) {}

  getListIngredients() {
    return this.http.get(`${environment.BASE_URL}/api/ingredients`).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  getListIngredientsById(id) {
    return this.http
      .get(`${environment.BASE_URL}/api/ingredients/${id}`)
      .map(res => res.json());
  }
}
