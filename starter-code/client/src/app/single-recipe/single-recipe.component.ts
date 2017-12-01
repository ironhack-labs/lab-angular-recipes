import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../../services/recipes.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe: any;
  
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.recipesService.getRecipeById(params['id']).subscribe(recipe => {
        this.recipe = recipe;
      });
    });
  }

  ngOnInit() {}

}
