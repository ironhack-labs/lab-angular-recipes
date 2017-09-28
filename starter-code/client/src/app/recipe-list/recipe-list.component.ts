import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../services/dishes.service';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes;
  constructor(public recipe: RecipesService) {}

  ngOnInit() {

    this.recipes = this.recipe.getList();
  }
}
