import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service'

interface Recipe {
  name: string,
  image: string,
  description: string
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Array<Object> = [];

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe( recipes => this.recipesList = recipes );
  }

}
