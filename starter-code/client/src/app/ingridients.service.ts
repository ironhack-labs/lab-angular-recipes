import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngridientsService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

getDetails(recipeId){
  return this.ajaxTruc
    .get(`http://localhost:3000/api/dishes/${recipeId}`)
    .toPromise();
}

}
