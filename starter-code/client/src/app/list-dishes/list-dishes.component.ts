import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { DishesServiceService } from '../services/dishes-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css'],
  
})
export class ListDishesComponent implements OnInit {
  dishes$:Observable<any>;


  constructor(dishService:DishesServiceService, public router: Router) {
    this.dishes$ = dishService.getDishes();
  }

   

  ngOnInit() {
  }

}
