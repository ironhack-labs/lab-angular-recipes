import { Component, OnInit } from "@angular/core";
import { Dish, DishesService } from "../api/dishes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Ingredient, IngredientsService } from "../ingredients.service";
import { nextTick } from "q";

@Component({
  selector: "app-dish-details",
  templateUrl: "./dish-details.component.html",
  styleUrls: ["./dish-details.component.css"]
})
export class DishDetailsComponent implements OnInit {
  id: string;
  dishItem: Dish;
  ingredients: Array<Ingredient>;
  ingredientItem: Ingredient;
  qty: number;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myDishesServ: DishesService,
    private myIngredientsServ: IngredientsService,
    private myRouterServ: Router
  ) {}

  ngOnInit() {
    this.fetchIngredientsList();
    this.myActivatedRouteServ.paramMap.subscribe(myParams => {
      //console.log(myParams.get("id"));
      this.id = myParams.get("id");
      this.fetchDishDetails(this.id);
    });
  }

  fetchDishDetails(id) {
    this.myDishesServ
      .getDishItem(id)
      .then((response: Dish) => {
        this.dishItem = response;
        //console.log(response);
      })
      .catch(err => {
        alert("Sorry! There was a problem getting the dish's details");
        console.log(err);
      });
  }

  fetchIngredientsList() {
    this.myIngredientsServ
      .getList()
      .then((response: Array<Ingredient>) => {
        //console.log(this.ingredients);
        this.ingredients = response;
      })
      .catch(err => {
        alert("Sorry! There was a problem getting the ingredients list");
        console.log(err);
      });
  }

  addIngredient(dishId, ingredientId, qty: number) {
    console.log(typeof qty);
    console.log(dishId, ingredientId, qty);
    this.myIngredientsServ
      .addIngredient(dishId, ingredientId, qty)
      .then(response => {
        console.log(response);
        //this.myRouterServ.navigateByUrl(`/dishes/${response._id}`);
      })
      .catch(err => {
        alert("there was a pb posting phone :(");
        console.log(err);
      });
  }
}

// .then((response: Phone) => {
//   this.myRouterServ.navigateByUrl(`/phone/${response._id}`);
//   this.userForm = new PhoneSubmission();
// })
