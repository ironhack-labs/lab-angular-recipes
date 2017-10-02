import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RecipesService {
  baseUrl: string = "http://localhost:4200";

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(`${this.baseUrl}/api/dishes`);
  }
}
