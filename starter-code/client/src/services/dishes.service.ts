import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'


interface Dish {
  name: string,
  description: string,
  image: string,
  ingredients: Array<any>,
}


@Injectable()
export class DishList {
    dishList: Array<Dish> 
    
    constructor(private http: Http) {}

    getEntries() {
      return this.http.get('http://localhost:3000/api/dishes').pipe(
      map((dishes) => dishes.json()));
    }
    getEntryById(id: string ) {
      return this.http.get('http://localhost:3000/api/dishes'+"/"+id).pipe(
        map((dish) => dish.json()));
      }
      
    addEntry(name:string, description:string, image: string):Observable<object>{
      const postData = {
        name,
        description,
        image,
      };
      return this.http.post('http://localhost:3000/api/dishes', postData).pipe(
        map( (res:Response) => {
          const listas = res.json();
          console.log(listas);
          return listas;
        })
      )
    }

}

