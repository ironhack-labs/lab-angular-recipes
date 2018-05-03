import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DishesService } from "../services/dishes.service";
import "rxjs";
import { Dish } from "../list-interface";
import { Ingredients } from "../ingredients-interface";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.css"]
})
export class DishComponent implements OnInit {
  dish: Dish;
  idDish: string;
  ingredients: Array<Ingredients> = [];
  constructor(
    private DishesService: DishesService,
    private route: Router,
    private ActivateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ActivateRoute.params.subscribe(
      params => (this.idDish = String(params["id"]))
    );
    this.DishesService.getDish(this.idDish).subscribe(e => {
      this.dish = e;
    });
    this.DishesService.getIngredients().subscribe(e => {
      console.log(e)
      this.ingredients = e
    });
  }
}
