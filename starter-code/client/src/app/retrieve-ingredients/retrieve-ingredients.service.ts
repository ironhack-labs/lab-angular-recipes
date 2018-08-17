import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieveIngredientsService {

  constructor(private http: Http) { }
  
  getList() {
    return this.http.get(`${environment.BASE_URL}/api/ingredients`)
      .pipe(map((res) => res.json()));
  }
  
  getId(id) {
    return this.http.get(`${environment.BASE_URL}/api/ingredients/${id}`)
      .pipe(map((res) => res.json()));
  }

  addIt(ingredient) {
    return this.http.post(`${environment.BASE_URL}/api/ingredients`, ingredient)
      .pipe(map((res) => res.json()))
  }
}
