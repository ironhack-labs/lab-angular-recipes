import { Component, OnInit } from "@angular/core";
import { AllDishesService } from "../services/AllDishes.service";
import { Dish } from "../Dish-interface";
import { ActivatedRoute } from "@angular/router";
import { promised } from "q";
import { Ingredients } from '../Ingredients-interface';


@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.css"],
  providers: [AllDishesService]
})
export class DishComponent implements OnInit {
  dish: Object
  ingredients: Object
  quantity: number

  constructor(
    private dishesService: AllDishesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dishesService.getDish(params["id"]).subscribe(data => {
        this.dish = data;
      });
    });
    this.getAllIngredients()
  }

  getAllIngredients(){
    this.dishesService.getIngredits()
    .subscribe((data) => this.ingredients = data)
  }

  addIngredientToDish(dish, ingredient, quantity){
    console.log(dish, ingredient, quantity);
    this.dishesService.addIngredients(dish, ingredient, quantity).subscribe(data => {})
  }



}
