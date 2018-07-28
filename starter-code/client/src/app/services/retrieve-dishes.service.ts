import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
 
@Injectable()
export class RetrieveDishesService {

  constructor(
    private http: Http
  ) { }

  url='http://localhost:3000/api/dishes/'

  getDishes(){
    return this.http.get(this.url) 
      .pipe(map((res: Response)=>res.json()));          
  }

  getOneDish(id){
    return this.http.get(this.url + id)
    .pipe(map((res:Response)=>res.json()))
  }

}
