import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from 'app/services/dishes.service';
import { IngredientsService } from 'app/services/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeId: any;
  recipe: object;
  ingredients: {}[];

  constructor(private recipesService: DishesService, private ingredientsService: IngredientsService, private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.recipeId = String(params['id'])
    })
    this.recipesService.getRecipe(this.recipeId)
      .then((recipe)=> {
        this.recipe = recipe
      })
    this.ingredientsService.getIngredientsList()
    .then((ingredients) => {
      this.ingredients = ingredients})
  }

  addIngredient(ingredientID, qty) {
    this.recipesService
    .addIngredientToRecipe(ingredientID, qty, this.recipeId)
    .then(() => {
      console.log('Ingredient added');
    });
    }

}
