import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'



@Injectable()
export class MyServiceService {

    BASE_URL: string = 'http://localhost:3000';

constructor(private http: Http) { }

    getList(){
        return this.http.get(`${this.BASE_URL}/api/dishes`)
        .map(res => res.json())
    }
    getElement(id){
        return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
        .map(res => res.json())
    }

}
