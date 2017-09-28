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
  results;

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipe.getRecipes()
    .subscribe((recipes) => {
      this.recipeList = recipes;
    });
  }

  handleNewRecipe(form) {
    const newRecipe = {name: form.value.name, image: form.value.image, description: form.value.description}
    this.recipe.postRecipe(newRecipe).subscribe(res => {
      this.results = res;
    this.getRecipes();
    });
  }

}
