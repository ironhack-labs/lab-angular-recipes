import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DishServiceService {
  baseUrl: string = "http://localhost:3000"
  constructor(
    private http: HttpClient
  ) { }

  getRecipes() {
    return this.http.get(`${this.baseUrl}/api/dishes`)
  }

  getRecipeDetails(recipeId: string) {
    return this.http.get(`${this.baseUrl}/api/dishes/${recipeId}`)

  }
}
