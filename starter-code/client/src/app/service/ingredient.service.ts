import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class IngredientService {

  BASE_URL: string = 'http://localhost:3000';
      constructor(private http: Http) {}

      getAll() {
        return this.http.get(`${this.BASE_URL}/api/ingredients`)
          .map((res) => res.json());

      }

      get(id) {
        return this.http.get(`${this.BASE_URL}/api/ingredients/${id}`)
          .map((res) => res.json());
      }

      edit(phone) {
        //return this.http.put(`${this.BASE_URL}/api/ingredients/${ingredient.id}`, ingredient)
          //.map((res) => res.json());
      }

      remove(id) {
        return this.http.delete(`${this.BASE_URL}/api/ingredients/${id}`)
          .map((res) => res.json());
      }

}
