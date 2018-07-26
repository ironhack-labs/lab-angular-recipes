import { Component, OnInit } from '@angular/core';
import { Recipe, RecipesService } from 'services/recipes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Ingredient, IngredientsService } from 'services/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [ RecipesService, IngredientsService ]
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  ingredients: Array<Ingredient>;

  constructor(private rS: RecipesService, private iS: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rS.getDish(params.id).subscribe(recipe => this.recipe = recipe);
    });

    this.iS.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

}
