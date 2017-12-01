import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipesService } from './../../services/recipes.service';
import { IngredientsService } from './../../services/ingredients/ingredients.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: any;
  ingredients: any;

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.recipesService.getRecipeById(params['id']).subscribe(recipe => {
        this.recipe = recipe;
      });
    });

    this.ingredientsService.getIngredientsList().subscribe(list => {
      this.ingredients = list;
    });
  }

  ngOnInit() {}

}
