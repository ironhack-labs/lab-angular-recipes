import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientsService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:3000/api';

  getIngredients(){
    return this.httpClient.get(`${this.baseURL}/ingredients`).toPromise();
  }

}