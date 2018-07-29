import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  dish = {
    ingredients: []
  }
  ingredients = []
  ingredient: string
  id: any

  constructor(
    private dishesService: DishesService, 
    private ingredientsService: IngredientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.id = params.id;
    })

    this.dishesService.getOneDish(this.id)
    .subscribe(dish => {
      this.dish = dish;
    })

    this.ingredientsService.getAllIngredients()
    .subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }
}
