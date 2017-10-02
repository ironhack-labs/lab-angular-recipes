import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IngredientApiService {

  baseUrl = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) {
  }

  getIngredients() {
    return this.httpThang.get(
      this.baseUrl + '/api/ingredients'
    );
  }
}
