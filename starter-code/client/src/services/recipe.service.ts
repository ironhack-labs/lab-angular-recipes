import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RecipeService {
  constructor(public http: Http) {}
  
  getList(){
    return this.http
      .get("http://localhost:3000/api/dishes")
      .map(res => {
        return res.json();
      });
  }
}