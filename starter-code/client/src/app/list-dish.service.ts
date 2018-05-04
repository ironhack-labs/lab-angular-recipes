import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class ListDishService {
  BASE_URL: string = "http://localhost:3000/api/";
  constructor(private http: Http) {}

  getListDish() {
    return this.http
      .get(`${this.BASE_URL}/dishes`)
      .map((res: Response) => res.json());
  }
  getSingleDish(id){
    return this.http
    .get(`${this.BASE_URL}/dishes/${id}`)
      .map((res: Response) => res.json());
  }
}
