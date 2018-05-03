import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs'

@Injectable()
export class DishesServicesService {
  Base_Url: string = 'http://localhost:3000'
  constructor(private http: Http) { }

retrieveDishes(){
  return this.http.get(`${this.Base_Url}/api/dishes`)
  .map((res) => res.json())
}
retrieveSingle(id){
  return this.http.get(`${this.Base_Url}/api/dishes/${id}`)
  .map((res) => res.json())
}
}