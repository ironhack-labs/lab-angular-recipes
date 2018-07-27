import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesList implements OnInit {

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes()
      .subscribe(recipes=>{
        this.recipes = recipes;
      });
  }

  recipes: Array<any> = [];
}