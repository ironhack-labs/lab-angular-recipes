import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishService } from '../../services/dish.service';

import { Dish } from '../../models/dish';
@Component({
  selector: 'app-page-dish-detail',
  templateUrl: './page-dish-detail.component.html',
  styleUrls: ['./page-dish-detail.component.css']
})
export class PageDishDetailComponent implements OnInit {

  dish: Dish;

  constructor(private dishService: DishService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dishService.getDishDetails(params.id)
        .subscribe(data => this.dish = data);
    });
  }

}
