import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  API_URL = 'http://localhost:3000/api';
  
  constructor(private http: Http) { }
  
  getList(): Promise<any> {
    return this.http.get(`${this.API_URL}/dishes`)
      .toPromise()
      .then((res: Response) => res.json())
  }

  getSingle(id): Promise<any> {
    return this.http.get(`${this.API_URL}/dishes/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
  }


}

