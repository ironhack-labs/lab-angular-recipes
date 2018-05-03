import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class IngredientService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  // saveIngredient(id,text) {
  //   console.log(`Saving ingredient ${text} for ${id}`)
  //   return this.http.post(`${this.BASE_URL}/api/ingredient`,{phone_id:id, text})
  //     .map((res) => res.json());
  // }

  // getComments(id) {
  //   return this.http.get(`${this.BASE_URL}/api/comment/byphone/${id}`)
  //     .map((res) => res.json());

  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }
}
