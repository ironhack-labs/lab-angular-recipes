import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishesService } from '../../services/dishes.service';
import { IngredientsService } from '../../services/ingredients.service';

import { Dish } from '../../models/dish';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-page-dish-detail',
  templateUrl: './page-dish-detail.component.html',
  styleUrls: ['./page-dish-detail.component.css']
})
export class PageDishDetailComponent implements OnInit {

  dish: Dish;
  ingredients: Ingredient[];

  constructor(private dishesService: DishesService,
     private activatedRoute: ActivatedRoute,
    private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dishesService.getDish(params.id)
        .subscribe(data => this.dish = data);
    });
    this.ingredientsService.getIngredients()
      .subscribe(data => this.ingredients = data);
  }
}
