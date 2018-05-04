import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DishesService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getAllDishes(): Promise<any> {
    // const options = {
    //   withCredentials: true
    // };
    return this.httpClient.get(`${this.baseUrl}/dishes`)
      .toPromise();
  }

}
  