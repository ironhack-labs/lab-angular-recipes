import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-page-dishes',
  templateUrl: './page-dishes.component.html',
  styleUrls: ['./page-dishes.component.css']
})
export class PageDishesComponent implements OnInit {


  dishes: Array<Dish> = null;

  constructor(public dishService: DishService) { }

  ngOnInit() {
    this.dishService.getAllDishes()
      .subscribe(data => this.dishes = data);
  }

}
