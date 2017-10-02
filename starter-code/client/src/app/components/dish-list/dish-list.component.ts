import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish'

import {RecipesService} from '../../services/recipes.service'

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishList: Dish[]
  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    this.recipeService.getList()
      .subscribe((dishList) => this.dishList = dishList);
  }
}
