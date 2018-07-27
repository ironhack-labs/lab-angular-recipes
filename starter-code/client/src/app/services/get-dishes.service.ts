import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class GetDishesService {

  url = "http://localhost:3000/api/dishes/"

  constructor(private http: Http) { }

  getAllRecipies(){
    return this.http.get(this.url)
    .pipe(map((res: Response)=>res.json()));
  }

}
