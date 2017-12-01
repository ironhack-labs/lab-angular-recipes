import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../services/recipe-list.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  recipes:Array<any> = [];

  constructor(public journal: RecipeListService) {
    this.journal.getRecipeList().subscribe( list => {
      this.recipes = list;
    })
  }

  ngOnInit() {
  }

}
