import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()

export class DishesService {

  private baseURL = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  getAllDishes(){
    return this.httpClient.get(`${this.baseURL}/dishes`).toPromise();
  }
  getOneDish(id){
    console.log('hola');
    return this.httpClient.get(`${this.baseURL}/dishes/${id}`).toPromise();
  }

  createDishes(data){
    return this.httpClient.post(`${this.baseURL}/dishes`, data).toPromise();
  }

}
