import { Recipe } from './../../../shared/models/recipe.model';
import { RecipesService } from './../../../shared/services/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Array<Recipe> = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.list()
      .subscribe((recipes) => this.recipes = recipes);
  }

}
