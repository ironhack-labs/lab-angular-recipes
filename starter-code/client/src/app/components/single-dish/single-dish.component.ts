import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {

  dish: Object;

  ingredients: {}[];

  dishId: any;

  constructor(
    private dishService: DishesService, 
    private ingredientsService: IngredientsService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.dishId = String(params.id);
        this.dishService.getSingleDish(this.dishId).then(dish => {
          this.dish = dish;
        })
      })
    this.ingredientsService.getIngredient()
    .then((ingredients) => {
      this.ingredients = ingredients;
    })
  }

  addIngredient(ingredientId, qty) {
    this.dishService
      .addIngredientToDish(ingredientId, qty, this.dishId)
      .then(() => {
        console.log('Added successfully')
      })
  }

}
