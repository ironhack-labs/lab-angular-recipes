import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private http: Http,
  ) { }

  getDishes(){
    return this.http.get(`${environment.BASE_URL}/api/dishes`).pipe(
      map(dishes => dishes.json())
    );
  }

  getDish(id){
    return this.http.get(`${environment.BASE_URL}/api/dishes/${id}`).pipe(
      map(dish => dish.json())
    );
  }

  addDish(body){
    return this.http.post(`${environment.BASE_URL}/api/dishes`, body).pipe(
      map(dish => dish.json())
    )
  }
  
}
