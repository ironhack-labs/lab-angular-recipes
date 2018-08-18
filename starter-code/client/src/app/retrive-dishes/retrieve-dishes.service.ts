import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieveDishesService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/dishes`)
      .pipe(map((res) => res.json()));
  }
  getId(id) {
    return this.http.get(`${environment.BASE_URL}/api/dishes/${id}`)
      .pipe(map((res) => res.json()));
  }

  editId(dish) {
    return this.http.put(`${environment.BASE_URL}/api/dishes/${dish.id}`, dish)
      .pipe(map((res) => res.json()));
  }

  removeId(id) {
    return this.http.delete(`${environment.BASE_URL}/api/dishes/${id}`)
      .pipe(map((res) => res.json()));
  }

  addIt(dish) {
    return this.http.post(`${environment.BASE_URL}/api/dishes`, dish)
      .pipe(map((res) => res.json()))
  }

  addDishS(dish) {
    console.log(dish);
    return this.http.post(`${environment.BASE_URL}/api/dishes`, dish)
    .pipe(map(dish => dish.json()))	    
  }
}
