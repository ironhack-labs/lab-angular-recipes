import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
    BASE_URL: String = 'http://localhost:3000';

    constructor(private http: Http) { }

    getdishesList():Observable<any> {
        return this.http.get('http://localhost:3000/api/dishes')
        .map(res => res.json());
    }

    getSingleDishes(id):Observable<any> {
        return this.http.get(`http://localhost:3000/api/dishes/${id}`)
        .map(res => res.json());
    }
}