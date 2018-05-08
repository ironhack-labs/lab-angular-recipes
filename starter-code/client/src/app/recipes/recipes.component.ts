import { Component, OnInit } from '@angular/core';
import { Dish, DishesService } from '../api/dishes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // dishes: Array<Dish> = [];

  constructor(
    // public apiTruc: DishesService
  ) { }

  ngOnInit() {
  }

}
