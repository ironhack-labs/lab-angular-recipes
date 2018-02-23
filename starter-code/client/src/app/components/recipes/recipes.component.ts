import { Component, OnInit } from '@angular/core';
import { DishesService } from 'app/services/dishes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes : {}[];

  constructor(private recipesService: DishesService) { }

  ngOnInit() {
    this.recipesService.getList()
    .then((recipes) => {
     this.recipes = recipes})
  }

}
