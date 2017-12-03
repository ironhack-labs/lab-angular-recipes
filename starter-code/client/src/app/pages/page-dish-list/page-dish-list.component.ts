import { Component, OnInit } from '@angular/core';

import { DishesService } from '../../services/dishes.service';

import { Dish } from '../../models/dish';

@Component({
  selector: 'app-page-dish-list',
  templateUrl: './page-dish-list.component.html',
  styleUrls: ['./page-dish-list.component.css']
})
export class PageDishListComponent implements OnInit {

  dishes: Array<Dish>;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getDishes()
      .subscribe((data) => this.dishes = data);
  }
}
