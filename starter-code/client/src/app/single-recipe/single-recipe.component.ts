import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../services/recipe-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  recipe:any;
  constructor( public router:Router, public recipeService:RecipeListService, public route:ActivatedRoute) {
    route.params.subscribe(params => {
       recipeService.getSingleRecipe(params['id']).subscribe(recipe => this.recipe = recipe);
     })
  }

  ngOnInit() {

  }

}
