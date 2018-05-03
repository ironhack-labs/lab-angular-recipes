import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from '../dishes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDishesComponent } from '../my-dishes/my-dishes.component';
import { MyIngredientsService } from '../my-ingredients.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish: object;
  name: string;

  ingredients: Array<object>;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dishesService: DishesServiceService,
    private ingredientsService: MyIngredientsService
  ) {
    route.params.subscribe(params => {
      dishesService.getOne(params.id).subscribe(dish => (this.dish = dish));
    });
    ingredientsService
      .getIngredients()
      .subscribe(ingredients => (this.ingredients = ingredients));
  }

  addIngredient(dishId, ingId, quantity) {
    console.log(dishId, ingId, quantity);
    this.dishesService.addIngredient(dishId, ingId, quantity).subscribe();
  }
  ngOnInit() {}
}
