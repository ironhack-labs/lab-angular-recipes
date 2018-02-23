import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response} from '@angular/http';

@Injectable()
export class DishService {
  API_URL ='http://localhost:3000'


  constructor(private http: Http) { }
  
  getList() :Promise<any> {
    return this.http.get(`${this.API_URL}/recipe-app`)
    .toPromise()
    .then((res: Response) => res.json())
  }

}
