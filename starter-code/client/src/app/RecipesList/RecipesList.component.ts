import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../Recipes.service';

interface Recipe {
  name: string,
  image: string,
  description: string
}

@Component({
  selector: 'app-RecipesList',
  templateUrl: './RecipesList.component.html',
  styleUrls: ['./RecipesList.component.css']
})
export class RecipesListComponent implements OnInit {

  recipesList: Array<Recipe>;

  constructor(private recipes: RecipesService) { }

  ngOnInit() {
    this.recipes.getRecipes().subscribe( recipes => this.recipesList = recipes );
  }

}
