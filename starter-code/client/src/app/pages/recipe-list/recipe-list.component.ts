import { Component, OnInit } from '@angular/core';
import { DishRetrieveService } from '../../services/dish-retrieve.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: any[] = [];

  constructor(
    private recipeThang: DishRetrieveService
  ) { }

  ngOnInit() {
    this.recipeThang.getRecipes()
      .subscribe(
        (recipesFromApi: any[]) => {
          this.recipes = recipesFromApi;
        }
      );
  }

}
