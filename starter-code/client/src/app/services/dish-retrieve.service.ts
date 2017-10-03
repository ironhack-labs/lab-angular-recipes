import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DishRetrieveService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  retreiveDish(){

  }

  getRecipes(){
    return this.httpThang.get(
      this.baseUrl + '/api/dishes'
    )
  }

  getRecipeDetails(dishId: string) {
    return this.httpThang.get(
      this.baseUrl + '/api/dishes/' + dishId
    )
  }

}
