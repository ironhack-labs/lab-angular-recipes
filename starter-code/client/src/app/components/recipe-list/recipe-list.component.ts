import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Dish } from '../../models/dish';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Array<Dish>;

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
    this.recipe.getRecipes()
                      .subscribe((recipes) => {
                        this.recipeList = recipes;
                      });
  }

}
