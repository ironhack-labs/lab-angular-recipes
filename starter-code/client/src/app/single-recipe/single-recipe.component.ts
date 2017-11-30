import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe;
  constructor(public recipes: RecipesService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
          this.recipes.getOneRecipes(params['id']).subscribe(oneRecipe => {
            this.recipe = oneRecipe;
          })
        })
  }

}
