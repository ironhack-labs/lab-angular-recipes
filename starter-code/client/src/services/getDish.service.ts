import { Injectable } from "../../node_modules/@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
const { baseUrl } = environment;

@Injectable()
export class getDishService {
    constructor(public http: Http) { }

    getDishes(): Observable<Array<object>> {
        return this.http.get(`${baseUrl}/dishes`)
            .map((res) => res.json())
    }

    getOne(id: string): Observable<object> {
        return this.http.get(`${baseUrl}/dishes/${id}`)
            .map((res) => res.json())
    }

    getIngredients(): Observable<Array<object>> {
        return this.http.get(`${baseUrl}/ingredients`)
            .map((res) => res.json())

    }

    addIngredients(dishId, id, quantity): Observable<object> {
        return this.http.post(`${baseUrl}/dishes/${dishId}/ingredients/${id}/add`, { quantity })
        .map((res)=>res.json());
    }

    createDish(dish:object): Observable<object>{
        return this.http.post(`${baseUrl}/dishes`,dish)
        .map((res)=>res.json());
    }

    createIngre(ingre:object): Observable<object>{
        return this.http.post(`${baseUrl}/ingredients`,ingre)
        .map((res)=>res.json());
    }
}
