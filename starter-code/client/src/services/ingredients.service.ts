import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import 'rxjs/add/operator/map'

const url = environment.BASEURL;

@Injectable()
export class IngredientsService {
  constructor(private http: Http) {}
  getIngredients() {
    return this.http.get(`${url}/api/ingredients`).map(res => res.json());
  }
  getIngredientById(id:string) {
    return this.http.get(`${url}/api/ingredients/${id}`).map(res => res.json());
  }
  // addEntry(title:string,content:string) {
  //   return this.http
  //     .post(`${url}/api/journal-entries`,{title, content})
  // }
}