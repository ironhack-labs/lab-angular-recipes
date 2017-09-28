import { Component, OnInit } from '@angular/core';
import {RecipeListService} from '../services/recipe-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes;
  constructor(public recipeService: RecipeListService) { }

  ngOnInit() {
    this.recipeService.getList().subscribe(result => this.recipes = result)
  }

}
