import { Component, OnInit } from '@angular/core';
import { DishServiceService } from '../../services/dish-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[any] = [];
  constructor(
    private dishService: DishServiceService
  ) { }

  ngOnInit() {
    this.dishService.getRecipes()
      .subscribe(
      (recipesFromApi: any[]) => {
        console.log(recipesFromApi)
        this.recipes = recipesFromApi;
      }
      );
  }

}
