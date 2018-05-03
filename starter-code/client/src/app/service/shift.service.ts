import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class ShiftService {
  CURL: string = "http://localhost:3000"
  constructor(private http: Http) {}
  getRecipes() {
    return this.http.
    get(`${this.CURL}/api/dishes`).
    map(res => res.json());
  }
  getRecipe(id) {
    return this.http
      .get(`${this.CURL}/api/dishes/${id}`)
      .map(res => res.json());
  }
}
