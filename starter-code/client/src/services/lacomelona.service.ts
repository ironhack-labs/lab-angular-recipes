import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class LaComelona {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  tuComida() {
    return this.http.get(`${this.BASE_URL}/api/dishes`).map(res => res.json());
  }
  detallitosDeTuComida(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`).map(res => res.json());
  }
}
