import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/ingredients";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class IngredientsService {
  
  constructor(private http: Http) {}

  getAllIngredients():Observable<any> {
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }

  addNewIngredient(quant, dishId, ingId):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${DOMAIN}/api/dishes/${dishId}/ingredients/${ingId}/add`, JSON.stringify(quant), options)
                    .map(res => res.json());
  }
}
