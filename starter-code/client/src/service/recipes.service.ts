import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class recipesService {
  constructor( public http: Http) {}

  getJournal() {
    return this.http
      .get("http://localhost:3000/api/dishes")
      .map(res => {
        console.log(res);
        return res.json();
      });
  }
}
