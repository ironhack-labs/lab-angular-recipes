import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientsService{
    url = "http://localhost:3000/api/ingredients/";
    
    constructor(private http:Http){}

    getIngredients(){
      return this.http.get(this.url).map(res=>res.json());
    }
    
}