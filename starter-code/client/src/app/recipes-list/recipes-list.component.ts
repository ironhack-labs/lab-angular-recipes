import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service'


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes;
  constructor(private recipe: RecipesService) { }

  ngOnInit() {
    this.recipe.getList().subscribe((recipes) => {
      this.recipes = recipes
    })

  }

}
