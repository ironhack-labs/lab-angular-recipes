import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: any
  ingredients: Array<Object>

  constructor(public recipesService: RecipesService, public ingredientsService: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.recipesService.getRecipeById(params.id).subscribe( recipe => this.recipe = recipe)
    })
    this.ingredientsService.getIngredients().subscribe( ingredients => this.ingredients = ingredients)
  }

  addIngredient(ingredientId, quantity) {
    this.recipesService.addIngredientToRecipe(this.recipe._id, ingredientId, quantity).subscribe( recipe => {
      this.recipe = recipe.json()
    })
  }
}
