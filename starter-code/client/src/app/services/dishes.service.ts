import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response} from '@angular/http'

@Injectable()
export class DishesService {

  API_URL ='http://localhost:3000'

  constructor(private http: Http) { }

  getList() :Promise<any> {
    return this.http.get(`${this.API_URL}/api/dishes`)
    .toPromise()
    .then((res: Response) => res.json())
  }
  getRecipe(id) :Promise<any> {
    return this.http.get(`${this.API_URL}/api/dishes/${id}`)
     .toPromise()
     .then((res: Response) => res.json())
   }

}
