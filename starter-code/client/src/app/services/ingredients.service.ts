import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class IngredientsService {

  constructor(
    private http: Http
  ) { }

  url = 'http://localhost:3000/api/ingredients'

  getIngredients(){
   return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }

}
