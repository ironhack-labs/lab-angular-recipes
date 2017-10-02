import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dish } from '../../models/dish';
import { Ingredient } from '../../models/ingredient';

import {RecipesService} from '../../services/recipes.service';
import {IngredientsService} from '../../services/ingredients.service';


@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  dish: Dish;
  ingredientList: Ingredient[];
  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.getDish();

  }

  getDish(){
    this.route.params.subscribe((params) => {
      this.recipeService.getOne(params['id'])
        .subscribe((dish) => this.dish = dish);
    });
    this.ingredientsService.getList()
      .subscribe((ingredientList)=> this.ingredientList=ingredientList);
  };

  addOneIngredient(quantity,id){

    this.route.params.subscribe((params) => {

      let dishId=params['id'];

      this.recipeService.addIngredient(quantity,dishId,id)
      .subscribe((dish) => this.dish = dish);

      this.getDish()      
    });
  };
}
