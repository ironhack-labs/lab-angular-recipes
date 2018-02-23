import { Component, OnInit, Input } from '@angular/core';
import { DishService } from 'app/services/dish.service';
import { IngredientsService } from 'app/services/ingredients.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-one',
  templateUrl: './display-one.component.html',
  styleUrls: ['./display-one.component.css']
})
export class DisplayOneComponent implements OnInit {

  dish: Object
  dishId: string
  ingredients: Array<object>

  constructor(private dishService: DishService, private ingredientsService: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.dishId = String(params.id)
    })
    this.dishService.getOne(this.dishId)
    .then((dish) => {
      this.dish = dish
    })
    this.ingredientsService.getAllIngredients()
    .then((ingredients) => {
      this.ingredients = ingredients})
  }

  addIngredient(quantity, ingredientId) {
    // console.log(quantity, ingredient)
    this.dishService
    .addingIngredients(quantity, ingredientId, this.dishId)
    .then(() => {
      console.log('ingredient added')
    })
  }
  }