import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/ingredients";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getAllIngredients():Observable<any>{

    return this.http.get(BASEURL)
    .map(res => res.json());
  }

  addNewIngredient(data){

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    var body = "name=" + data.name + "&image=" + data.image + "&description="+ data.description;
    this.http.post(BASEURL,body,options).subscribe(res => res.json());
    
  }

}
