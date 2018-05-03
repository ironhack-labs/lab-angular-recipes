import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class ListingRecipesService {
  BASE_URL: string = "http://localhost:3000/api/";
  constructor(private http: Http) {}

  getRecipes() {
    console.log("lo pide")
    return this.http
      .get(`${this.BASE_URL}/dishes`)
      .map((res: Response) => res.json());
  }
}
