import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class ShiftService {
  constructor(private http: Http) {}
  getRecipes() {
    return this.http
      .get('http://localhost:3000/api/dishes')
      .map(res => res.json());
  }
}
