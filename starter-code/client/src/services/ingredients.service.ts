import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const { BASEURL } = environment;

export interface Ingredient {
  name: string;
}

@Injectable()
export class ingredientsService {

  constructor(public http: Http){ }

  getIngredients(){
    return this.http.get(`${environment.BASEURL}/api/ingredients/`)
    .map((res) => res.json());
  }
}