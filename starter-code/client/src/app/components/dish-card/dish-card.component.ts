import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dish } from '../../models/dish'

import {RecipesService} from '../../services/recipes.service'


@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  dish: Dish;
  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.recipeService.getOne(params['id'])
        .subscribe((dish) => this.dish = dish);
      });
  }


}
