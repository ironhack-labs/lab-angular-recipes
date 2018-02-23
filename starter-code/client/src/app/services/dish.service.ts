import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishService {
  API_URL ='http://localhost:3000'


  constructor(private http: Http) { }

  getList() :Promise<any> {
    return this.http.get(`${this.API_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json())
  }

  getOne(id): Promise<any> {
    return this.http
    .get(`${this.API_URL}/api/dishes/${id}`)
    .toPromise()
    .then((res: Response) => res.json())
  }

  addingIngredients(quantity, ingredientId, dishId): Promise<any> {
    return this.http
    .post(`${this.API_URL}/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity: quantity})
    .toPromise()
    .then((res: Response) => res.json())

  }

}
