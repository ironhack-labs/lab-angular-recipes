import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieveDishesService {
  BASE_URL:string = environment.baseURL;

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
       .map((res) => res.json());
  }

}
