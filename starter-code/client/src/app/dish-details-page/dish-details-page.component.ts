import { Component, OnInit } from '@angular/core';
import { Dish, DishesService, ingredientSubmission } from '../api/dishes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService, Ingredient } from '../api/ingredient.service';

@Component({
  selector: 'app-dish-details-page',
  templateUrl: './dish-details-page.component.html',
  styleUrls: ['./dish-details-page.component.css']
})
export class DishDetailsPageComponent implements OnInit {
  dishId: string;
  ingredientId: string;
  dishItem: Dish;
  ingredients: Array<Ingredient>;
  quantity: number;


  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    private myDishesServ: DishesService,
    private myIngredientServ: IngredientService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        // console.log(myParams.get("dishId"));
        this.dishId = myParams.get("dishId");
        // this.ingredientId = myParams.get("ingredientId")
        this.retrieveDishDetails();
      })

    this.getAllIngredients();
  }

  retrieveDishDetails(){
    this.myDishesServ.getDishItem(this.dishId)
      .then((response: Dish) => {
        // console.log(response)
        this.dishItem = response
      })
      .catch((err) => {
        alert("Sorry! There was an issue retrieving the dish information.")
        console.log(err)
      })
  }

  getAllIngredients(){
    this.myIngredientServ.getIngredients()
      .then((response: Array<Ingredient>) => {
        // console.log(response)
        this.ingredients = response;
      })
      .catch((err) => {
        alert("There was a problem retrieiving ingredients")
        console.log(err);
      });
  }

  ingredientSubmit(oneIngredient){
    this.myDishesServ.addIngredientToDish(this.dishId, oneIngredient._id, this.quantity)
      .then((response) => {
        this.myRouterServ.navigateByUrl("/");
      })
      .catch((err) => {
        alert("Could not add ingredients");
        console.log(err)
      });
  }


}
