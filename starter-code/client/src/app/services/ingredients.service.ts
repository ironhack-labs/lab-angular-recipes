import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  url = 'http://localhost:3000/api/ingredients/'

  constructor(private http: Http) { }

  getAllIngredients() {
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()))
  }
  
}
