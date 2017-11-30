import { Component, OnInit } from '@angular/core';
import {RecipeBookService} from '../../services/recipe-book.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

      recipes:Array<any> = [];
      constructor(public recipeBookService:RecipeBookService) {
        this.recipeBookService.getRecipeList().subscribe( list => {
          this.recipes = list;
        });
      }

  ngOnInit() {
  }

}
