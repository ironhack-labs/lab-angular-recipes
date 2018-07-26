import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Object;
  recipeId : string;
  constructor(public recipeService : RecipeService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=> this.recipeId = params['id'])
    this.recipeService.getRecipe(this.recipeId).subscribe((list) => {
      this.recipe = list;
    })
  }

}
