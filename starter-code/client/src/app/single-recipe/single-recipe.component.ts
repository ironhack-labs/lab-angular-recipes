import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  myRecipe:any;
  constructor(public route: ActivatedRoute, public listRecipes:RecipesService) {
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listRecipes.getOneDish(params['id']).subscribe(list => {
      this.myRecipe = list;
    })
    })
  }

}
