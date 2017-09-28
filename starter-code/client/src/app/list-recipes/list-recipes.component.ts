
import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  element: any;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.getList()
    .subscribe((element) => this.element = element);

  }

}
