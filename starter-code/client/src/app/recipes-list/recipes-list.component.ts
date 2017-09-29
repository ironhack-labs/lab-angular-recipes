import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: any;
  constructor(public recipeS:RecipesService) { }

  ngOnInit() {
    this.recipeS.getList()
    .subscribe((rec) => this.recipes = rec);
  }

}
