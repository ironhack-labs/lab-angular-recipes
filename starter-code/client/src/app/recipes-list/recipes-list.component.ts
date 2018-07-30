import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service.';

interface recipes {
  name: String;
  image: String;
  dewcription: Date;
}

 @Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Array<recipes> = [];
   constructor(public dS: RecipeService) { }
   ngOnInit() {
        this.dS.getList()
          .subscribe((recipe) => {
            this.recipes = recipe;
          });
      }
 }