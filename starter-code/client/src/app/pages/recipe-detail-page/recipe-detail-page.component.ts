import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishesService } from '../../services/dishes.service';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit {

  dish: any;

  dishId: string;
  ingredients: Array<Object>;
  ingredientId: string;
  quantity: number;

  constructor(
    private dishesService: DishesService,
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute
  ) {

    this.ingredientsService.retrieveAll()
      .then(result => this.ingredients = result);

    this.route.params.subscribe((params) => {
      this.dishId = params.id;
      this.dishesService.retrieveOneById(this.dishId)
        .then((dish) => {
          this.dish = dish;
        });
    });
  }

  ngOnInit() {
  }

  handleAddIngredient(form) {
    if (form.valid) {
      this.dishesService.addIngredient(this.dishId, this.ingredientId, this.quantity)
        .then(dish => {
          this.dish = dish;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

}
