import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Dish } from 'interfaces/Dish';



@Injectable()
export class DishesService {

  showForm: boolean = false;

  constructor(private http: Http) {}

  getDishes(): Observable<Array<Dish>>{
    return this.http.get('http://localhost:3000/api/dishes').map((res)=>res.json());
  }

  getDish(id:string): Observable<Dish>{
    return this.http.get(`http://localhost:3000/api/dishes/${id}`).map((res) => res.json());
  }

  addDish(newDish: Dish){
    return this.http.post(`http://localhost:3000/api/dishes`, newDish).map((res)=>res.json())
  }
}


  