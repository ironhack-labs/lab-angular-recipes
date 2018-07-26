import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from 'interfaces/Ingredient';

@Injectable()
export class IngredientsService {

  constructor(private http: Http) { }

  getIngredients(): Observable<Array<Ingredient>>{
    return this.http.get('http://localhost:3000/api/ingredients').map((res)=>res.json())
  }
}
