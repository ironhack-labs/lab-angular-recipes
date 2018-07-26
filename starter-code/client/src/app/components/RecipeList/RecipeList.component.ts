import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/Recipes.service';

@Component({
  selector: 'app-RecipeList',
  templateUrl: './RecipeList.component.html',
  styleUrls: ['./RecipeList.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Array<object>;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.getAllRecipes()
      .subscribe(list=>this.recipeList=list)
  }

}
