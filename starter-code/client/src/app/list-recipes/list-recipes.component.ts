import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
recipe:Array<any> = [];
  constructor(
    public recipeService: RecipeService
  ) {
    this.recipeService.getRecipeList().subscribe( list =>{
      this.recipe = list;
    });
   }
   ngOnInit() {
   }
}
