import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class IngredientsService {
    BASE_URL: String = 'http://localhost:3000';
    constructor(private http: Http) { }

    getList() {
        return this.http.get(`${this.BASE_URL}/api/ingredients`)
            .map((res) => res.json());
    }

    addIngredient(id_Ing, id_Dish) {
        console.log(`${this.BASE_URL}/api/dishes/${id_Dish}/ingredients/${id_Ing}/add`)
        return this.http.post(`${this.BASE_URL}/api/dishes/${id_Dish}/ingredients/${id_Ing}/add`,{})
                        .map(res => res.json());
      }
}