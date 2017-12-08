import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {ActivatedRoute} from '@angular/router';
import {IngredientsService} from '../services/ingredients.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  myRecipe:any;
  myIngredients: any;
  constructor(public route: ActivatedRoute, public listRecipes:RecipesService, public listIngredients:IngredientsService) {
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listRecipes.getOneDish(params['id']).subscribe(list => {
      this.myRecipe = list;
    })
    })
      this.listIngredients.getAllIngredients().subscribe(ilist => {
      this.myIngredients = ilist;
    })
  }
};
