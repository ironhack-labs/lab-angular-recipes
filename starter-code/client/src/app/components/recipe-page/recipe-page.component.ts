import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipe: Object;
  recipeID: string;
  ingredients: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recipeID = String(params.id);
    });
    this.recipeService.getRecipe(this.recipeID).then(recipe => {
      this.recipe = recipe;
    });
    this.ingredientsService.getIngredients().then(ingredients => {
      this.ingredients = ingredients;
    });
  }

  addIngredient(ingredientID, qty) {
    this.recipeService
      .addIngredientToRecipe(ingredientID, qty, this.recipeID)
      .then(() => {
        console.log('Ingredient added');
      });
  }
}






