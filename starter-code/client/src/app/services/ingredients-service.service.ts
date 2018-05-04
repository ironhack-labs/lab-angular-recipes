import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class IngredientsServiceService {

constructor(private http: Http) { }

getIngredients(){
    return this.http.get ('http://localhost:3000/api/ingredients')
    .map((res)=>res.json());
}
addIngredients(id , idI,qty){
    return this.http.post (`http://localhost:3000//api/dishes/${id}/ingredients/${idI}/add`,{qty})
    .map((res)=>res.json());
}
}
