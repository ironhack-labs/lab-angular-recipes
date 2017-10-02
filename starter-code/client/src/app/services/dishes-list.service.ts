import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DishesListService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAllDishes() {
    return this.http.get(this.baseUrl + '/api/dishes');
  }

  getDetails(id: string) {
    return this.http.get(this.baseUrl + '/api/dishes/' + id);
  }

  getIngredients() {
    return this.http.get(this.baseUrl + '/api/ingredients');
  }

  postIngredient(dishId, id, quantity, name) {
    return this.http.post(this.baseUrl + '/api/dishes/'+dishId+'/ingredients/'+id+'/add', {quantity: quantity, name:name});
  }

  postDish(dish) {
    return this.http.post(this.baseUrl + '/api/dishes', dish);
  }

  postNewIng(ing) {
    return this.http.post(this.baseUrl + '/api/ingredients', ing);
  }

}
