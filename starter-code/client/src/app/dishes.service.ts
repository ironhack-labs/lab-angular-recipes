import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';



@Injectable()

export class DishesService {
  url = "http://localhost:3000/api/dishes/"

  constructor(private http:Http) { }

    //get all entries
    getAllRecipes(){
      return this.http.get(this.url)
      .map((res:Response)=>res.json());
  }

    //get one recipe
    getRecipe(id){
      return this.http.get(this.url + id)
      .map((res: Response)=>res.json())
    }

}
