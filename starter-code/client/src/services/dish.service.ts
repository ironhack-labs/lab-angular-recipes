import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable()
export class DishService {
  dishes:Array<any>=[]

  constructor(public http:Http) { 
    this.getDishes().subscribe()
  }

  getDishes():Observable<Array<any>>{
    return this.http.get("http://localhost:3000/api/dishes").pipe(
      map((res: Response) => {
        this.dishes = res.json()
        return this.dishes
      })
    )
  }
  getDish(id):any{
    if(this.dishes.length==0) return{}
    return this.dishes.find(e=>
    e._id=id)
  }
}
