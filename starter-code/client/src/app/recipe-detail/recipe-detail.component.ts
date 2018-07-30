import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from 'services/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Object;
  recipeId : string;
  ingredients: Array<Object>;
  ingredientId: string;
  constructor(public recipeService : RecipeService, public ingredientService: IngredientService,public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=> this.recipeId = params['id'])
    this.recipeService.getRecipe(this.recipeId).subscribe((list) => {
      this.recipe = list;
    })
    this.ingredientService.getIngredients().subscribe((list) => {
      this.ingredients = list;
    })
  }
  addIngredient(dishId, id, quantity){
    this.recipeService.addIngredient(dishId, id, quantity).subscribe(recipe => this.recipe = recipe)
    console.log(quantity)
  }
}
