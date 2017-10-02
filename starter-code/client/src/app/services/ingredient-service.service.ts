import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class IngredientServiceService {
  baseUrl: string = "http://localhost:3000"
  constructor(
    private http: HttpClient
  ) { }

  getIngredients(){
    return this.http.get(`${this.baseUrl}/api/ingredients`)
  }
}
