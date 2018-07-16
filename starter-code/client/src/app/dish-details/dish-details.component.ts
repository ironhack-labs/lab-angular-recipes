import { Component, OnInit } from '@angular/core';
import { Dish, DishApiService } from '../dish-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient, IngredientsApiService } from '../ingredients-api.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  id: string;
  dishItem: Dish;
  ingredientItem: Ingredient;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myDishServ: DishApiService,
    private myIngredientServ: IngredientsApiService,
    private myRouterServ: Router,
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
    .subscribe((myParams) => {
      this.id = myParams.get('dishId');
      this.fetchDishDetails();
      // this.fetchIngredients();
    });
  }

  fetchDishDetails() {
    this.myIngredientServ.getIngredientDetails(this.id)
    .then((response: Ingredient) => {
      this.ingredientItem = response;
    })
    this.myDishServ.getDisheDetails(this.id)
    .then((response: Dish) => {
      this.dishItem = response;
    });
  }

  addIngredient(id, qty) {
    console.log(id);
    console.log(qty);
  }
}
