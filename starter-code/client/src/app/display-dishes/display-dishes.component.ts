import { Component, OnInit } from '@angular/core';
import { DishesService} from '../services/dishes.service';

@Component({
  selector: 'app-display-dishes',
  templateUrl: './display-dishes.component.html',
  styleUrls: ['./display-dishes.component.css']
})
export class DisplayDishesComponent implements OnInit {
  myDishes: Array<Object> = [];
  constructor(private dishes: DishesService) { }

  ngOnInit() {
    this.dishes.getList()
    .subscribe((dishes) => {
      this.myDishes = dishes;
    });
  };

}
