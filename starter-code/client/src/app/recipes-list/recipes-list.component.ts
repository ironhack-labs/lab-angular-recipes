import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipesList:Array<object>

  constructor(private recipeService : RecipesService) { }

  ngOnInit() {
    this.recipeService.getList()
      .subscribe(list => this.recipesList = list);
  }

}
