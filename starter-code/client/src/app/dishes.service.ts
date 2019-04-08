import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
interface IDish{
  name:string;
  image:string;
  description:string;
}

@Injectable()
export class DishesService {

  constructor(private httpClient: HttpClient) { }
  
  getAllDishes():Promise<Array<IDish>>{
    return this.httpClient.get(`http://localhost:3000/api/dishes`)
    .toPromise()
    .then((dish: Array<IDish>) => dish)
  }
  getSingleDish(name:string):Promise<IDish>{
    return this.httpClient.get(`http://localhost:3000/api/dishes/${name}`)
    .toPromise()
    .then((dish: IDish) => dish)
  }
}
