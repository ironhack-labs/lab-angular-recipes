import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RetrieveIngredientsService {

  baseUrl: string = 'http://localhost:3000';

  ingredients: any[] = [];

  constructor(
    private httpThang : HttpClient
  ) { }

  getIngredients () {
    return this.httpThang.get(
      this.baseUrl + '/api/ingredients'
    )
  }


}
