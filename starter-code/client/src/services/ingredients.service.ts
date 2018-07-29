import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment.prod';

const BASEURL = environment.BASEURL;

@Injectable()
export class IngredientsService {
  
  constructor(public http: Http) {}

  getIngredients() {
    return this.http.get('${BASEURL}/api/ingredients').map(res => res.json());
  }
}