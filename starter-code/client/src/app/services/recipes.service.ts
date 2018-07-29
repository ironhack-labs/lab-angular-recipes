import { Injectable } from "../../../node_modules/@angular/core";
import { Http } from "../../../node_modules/@angular/http";
import { environment } from "environments/environment";
import "rxjs/add/operator/map";


 const BASE_URL=environment.BASE_URL;
 @Injectable()

export class RecipesService{

constructor(public http:Http){}

 getRecipes(){
 return this.http.get(`${BASE_URL}/api/dishes`)
 .map(res =>{res.json();
     })
 }
 getId(id:string){
     console.log('recoge id')
    return this.http.get(`${BASE_URL}/api/dishes/${id}`).map((res) => res.json());
}
addIngredientToRecipe(recipesId:string,id:string,quantity){
    return this.http
    .post(`${BASE_URL}/api/dishes/${recipesId}/ingredinets/${id}/add`,{quantity})
}
addRecipe(newRecipe){
    return this.http.post(`${BASE_URL}/api/dishes/`,newRecipe).map(res=> res.json());
}

}
 