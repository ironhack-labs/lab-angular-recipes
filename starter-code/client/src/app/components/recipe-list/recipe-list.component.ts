import { Component, OnInit } from '@angular/core';
import { DishesService } from 'app/services/dishes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<{}>;

  constructor(private dishesService : DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
    .then((recipes) => {
      this.recipes = recipes;
    })
  }

}
