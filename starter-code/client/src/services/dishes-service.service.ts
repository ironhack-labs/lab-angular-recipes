import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "../../node_modules/rxjs";
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class DishesServiceService {
  constructor(public http: Http) {}

  getDishes()
  { 
    return this.http.get(`${BASEURL}/api/dishes`)
      .map( (res) => {
        const dishes = res.json();
        return dishes;
      }); 
      }

      get(id) {
        return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
        .map((res) =>
             res.json());
        }
      }
    
