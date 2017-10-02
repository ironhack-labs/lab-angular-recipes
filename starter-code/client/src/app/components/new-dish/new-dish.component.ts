import { Component, OnInit } from '@angular/core';

import { Dish } from '../../models/dish';
import {RecipesService} from '../../services/recipes.service'


@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})
export class NewDishComponent implements OnInit {
  newDish: Dish;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  addItem(name, description, image){
    this.newDish= new Dish({name, description, image})
    this.recipeService.addNew(this.newDish).subscribe();

  }
}
