import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<Object>

  constructor(public recipesService:RecipesService) { }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe( recipes => this.recipes = recipes )
  }
}
