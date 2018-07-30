import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment'

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  
getDishes(){
  return this.http.get(`${environment.BASE_URL}/api/dishes`)
  .map((res) => res.json());
}

getDishById(id){
 
  return this.http.get(`${environment.BASE_URL}/api/dishes/${id}`)
  .map((res) =>res.json() );
}

addDish(dish) {
  return this.http.post(`${environment.BASE_URL}/api/dishes/`, dish).map(res => res.json());
}

}
