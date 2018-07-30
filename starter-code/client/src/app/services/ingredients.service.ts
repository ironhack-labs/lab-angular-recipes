import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientsService {

  baseUrl = 'http://localhost:3000/api/ingredients';

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }

}
