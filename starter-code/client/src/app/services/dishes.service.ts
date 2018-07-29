import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  url = 'http://localhost:3000/api/dishes/'

  constructor(private http: Http) { }

  getAllDishes() {
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()))
  }

  getOneDish(id) {
    return this.http.get(this.url + id)
    .pipe(map((res: Response) => res.json()))
  } 
}
