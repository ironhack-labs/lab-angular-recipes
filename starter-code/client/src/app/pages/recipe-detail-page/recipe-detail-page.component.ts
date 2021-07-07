import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DishesService } from '../../services/dishes.service';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent {

  dish: any;

  dishId: string;

  constructor(
    private dishesService: DishesService,
    private ingredientsService: IngredientsService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe((params) => {
      this.dishId = params.id;
      this.dishesService.retrieveOneById(this.dishId)
        .then((dish) => {
          this.dish = dish;
        });
    });
  }
  handleAddIngredient($event) {
    this.dishesService.addIngredient(this.dishId, $event.ingredientId, $event.quantity)
      .then(dish => {
        this.dish = dish;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
