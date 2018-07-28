import { Injectable } from "../../node_modules/@angular/core";
import { Http } from "../../node_modules/@angular/http";
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const { BASEURL } = environment;

@Injectable()
export class dishesService {

  constructor(public http: Http){ }

  getDishesList(){
    return this.http.get(`${environment.BASEURL}/api/dishes/`)
    .map((res) => res.json());
  }

  getOneDish(id){
    return this.http.get(`${environment.BASEURL}/api/dishes/${id}`)
    .map((res) => res.json()); 
  }

}