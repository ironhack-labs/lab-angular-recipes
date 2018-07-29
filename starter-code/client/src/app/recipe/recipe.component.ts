import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { IngredientsService } from '../Ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class Recipe implements OnInit {

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params=>{
        this.id = params.id;
        this.recipesService.getOneRecipe(this.id)
          .subscribe(recipe=>{
            this.recipe = recipe;
          });
      });

    this.ingredientsService.getIngredients()
      .subscribe(ingredients=>{
        this.ingredients = ingredients;
      });
  }

  id: any;
  recipe: any;
  ingredients: Array<any> = [];

  addIngredient(recipeId, ingredientId, quantity){
    let body = {quantity}
    this.recipesService.addIngredient(recipeId, ingredientId, body)
      .subscribe(recipe=>{
        this.router.navigate(['home']);
      });
  }
}