import { Component, OnInit } from '@angular/core';
import {  RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../services/ingredients.service';
@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe;
  allIngredients;
  dishId;
  constructor(public recipes: RecipesService, public ingredients: IngredientsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dishId = params['id']
      this.recipes.getOneRecipes(params['id']).subscribe(oneRecipe => {
        this.recipe = oneRecipe;
      });
    });
    this.ingredients.getAllIngredients().subscribe(list => {
      this.allIngredients = list;
    });
  }
  addIngredient(ingredientId, quantity) {
    this.recipes.insertIngredientInDish(ingredientId,this.dishId, quantity)
      .subscribe(recipe => {
        this.recipe=recipe;
      });
  }
}
