import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Array<any> = [];

  constructor(public recipeService:RecipeService) {
    this.recipeService.getRecipeList().subscribe( list =>{
      this.recipes = list;
    });

  }

  ngOnInit() {
  }

}
