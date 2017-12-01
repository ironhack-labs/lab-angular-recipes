import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes:Array<any> = [];

  constructor(public recipe: RecipeService) {
    this.recipe.getRecipesList().subscribe( list => {
      this.recipes = list;
    })
  }

  ngOnInit() {
  }

}
