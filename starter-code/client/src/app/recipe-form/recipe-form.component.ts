import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  constructor(public recipeService : RecipeService) { }

  ngOnInit() {
  }

  createRecipe(name, description, image){
    const recipe = {name, description, image}
    this.recipeService.createRecipe(recipe).subscribe()
  }
}
