import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService{
    url = "http://localhost:3000/api/dishes/";
    
    constructor(private http:Http){}
    
    getRecipes(){
      return this.http.get(this.url).map(res=>res.json());
    }

    getOneRecipe(id){
      return this.http.get(this.url + id).map(res=>res.json());
    }

    addIngredient(recipeId, ingredientId, body){
      return this.http.post(`${this.url}${recipeId}/ingredients/${ingredientId}/add`, body).map(res=>res.json());
    }
}