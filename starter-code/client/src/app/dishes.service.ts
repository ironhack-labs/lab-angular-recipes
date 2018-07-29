import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getDishes(){
    return this.http.get(`${environment.BASEURL}/api/dishes`)
      .map( res => res.json());
  }

  getSingleRecipe(id){
    return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
      .map( res => res.json());
  }
  

}