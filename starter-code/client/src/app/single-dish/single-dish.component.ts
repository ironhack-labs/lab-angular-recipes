import { Component, OnInit } from "@angular/core";
import { DishesService } from "../dishes.service";
import { IngredientsService } from "../ingredients.service";

import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-single-dish",
  templateUrl: "./single-dish.component.html",
  styleUrls: ["./single-dish.component.css"]
})
export class SingleDishComponent implements OnInit {
  dish: object = {};
  ingredients: Array<Object>;
  constructor(
    private dS: DishesService,
    private route: ActivatedRoute,
    private iS: IngredientsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dS.getDishById(params["id"]).subscribe(dish => (this.dish = dish));

      this.iS.getIngredients().subscribe(list => (this.ingredients = list));
    });
  }
  addIngredient(ing,qua) {

    this.iS.addIngredient(this.dish['_id'],ing._id,qua).subscribe(dish=>this.dish=dish)
  }
}
