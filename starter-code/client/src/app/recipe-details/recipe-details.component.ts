import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})


export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  ingredients: any[];

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipeDetails(params['id']);
    });

    this.recipesService.getIngredients()
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

  getRecipeDetails(id) {
    this.recipesService.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }
}