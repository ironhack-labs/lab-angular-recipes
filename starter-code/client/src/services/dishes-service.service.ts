import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "../../node_modules/rxjs";
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class DishesServiceService {

  constructor(public http: Http) { }
  getDishes():Observable<Array<object>>{
    return this.http.get(`${BASEURL}/api/dishes`).pipe(
      map( (res:Response) => {
        const dishes = res.json();
        return dishes;
      })






