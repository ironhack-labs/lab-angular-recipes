import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
    constructor(private http: Http) { }

    getDishes() {
      return this.http.get('http://localhost:3000/api/dishes')
        .map((res) => res.json());
    }

    getDish(id){
      return this.http.get(`http://localhost:3000/api/dishes/${id}`)
        .map((res) => res.json());
    }
    //
    // newEntry(title, content){
    //   return this.http.post('http://localhost:3000/api/journal-entries', {title, content})
    //     .map((res) => res.json());
    // }
}
