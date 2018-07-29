import { Injectable } from "../../../node_modules/@angular/core";
import { Http, Response } from "../../../node_modules/@angular/http";
import { Observable } from "../../../node_modules/rxjs";
import {map} from 'rxjs/operators'

@Injectable()
export class IngredientsService{
    ingredients:Array<any>=[]

    constructor(public http:Http){
         this.getingredients().subscribe()
    }

    getingredients():Observable<Array<any>>{

        return this.http.get("http://localhost:3000/api/ingredients").pipe(
            map((res:Response)=>{
                this.ingredients = res.json()
                return this.ingredients
            })
        )
    }
    getIngredient(id):any{
        return this.ingredients.find(e=>
            e._id==id
        )
    }

    addIngredientToDish(quantity:number,ingredientId,dishId):any{
        return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`,{quantity}).pipe(
            map((res:Response)=>{
                var dish = res.json()
                return dish
            })
        )
    }

}