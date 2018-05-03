import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes$:Observable<any>;

  constructor(private dishesService: DishesService) {
   
   }

  ngOnInit() {
    this.dishes$ = this.dishesService.getList()
    console.log(this.dishes$)
  }

}
