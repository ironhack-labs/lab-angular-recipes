import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class DishesServiceService {


constructor(private http: Http) { }

getDishes(){
    return this.http.get ('http://localhost:3000/api/dishes')
    .map((res)=>res.json());
}

getDish(id) {
    return this.http.get(`http://localhost:3000/api/dishes/${id}`)
      .map((res) => res.json());
  }


}
