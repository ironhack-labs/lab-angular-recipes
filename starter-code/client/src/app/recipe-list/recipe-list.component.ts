import { Component, OnInit } from '@angular/core';
import { DishesService } from 'app/services/dishes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Array<any>;

  constructor(public dS: DishesService) {
    this.dS.getList().subscribe(list => this.recipeList = list);
  }

  ngOnInit() {
  }

}