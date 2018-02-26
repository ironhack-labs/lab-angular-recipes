import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[];
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.getList()
      .subscribe((recipes) => {
        this.recipes = recipes;
      });
  }

}
