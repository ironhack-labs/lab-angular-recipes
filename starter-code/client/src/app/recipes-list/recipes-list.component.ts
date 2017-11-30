import { Component, OnInit } from '@angular/core';
import { RecipesService } from './../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<any> = [];
  constructor(private recipesService: RecipesService) {
    this.recipesService.getRecipesList().subscribe(list => {
      this.recipes = list;
    });
  }

  ngOnInit() {}
}
