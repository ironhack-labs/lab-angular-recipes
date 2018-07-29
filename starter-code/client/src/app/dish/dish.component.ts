import { Component, OnInit } from "@angular/core";
import { DishesService } from "services/dishes.service";
import { ActivatedRoute } from "@angular/router";
import { IngrediensService } from "services/ingredients.service";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.css"]
})
export class DishComponent implements OnInit {
  dish: any;
  id: string;
  ingredients: any;

  constructor(
    public dishService: DishesService,
    public router: ActivatedRoute,
    public ingredientService: IngrediensService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.dishService.getById(this.id).subscribe(data => (this.dish = data));
    });
    this.ingredientService
      .getIngredients()
      .subscribe(data => (this.ingredients = data));
  }

  addIngredientToDish(dishId, id, quantity) {
    console.log(dishId, id, quantity.value);
    this.dishService
      .addIngredientToDish(dishId, id, quantity.value)
      .subscribe(dish => {
        this.dish = dish;
      });
  }
}
