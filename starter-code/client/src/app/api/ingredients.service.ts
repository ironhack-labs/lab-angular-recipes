import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientsService {

  constructor(
    private ajaxEngine: HttpClient
  ) { }

  getIngredientList() {
    return this.ajaxEngine
    .get('http://localhost:3000/api/ingredients')
    .toPromise();
  }

}

export class Ingredient {
  _id: string;
  name: string;
  description: string;
  createdAt?: Date; 
  updatedAt?: Date;
}
