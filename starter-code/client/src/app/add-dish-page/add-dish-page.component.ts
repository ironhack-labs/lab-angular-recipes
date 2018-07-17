import { Component, OnInit } from '@angular/core';
import { DishForm, Dish, DishesService } from '../api/dishes.service';
import { Router } from '@angular/router';
import { Ingredient, IngredientService } from '../api/ingredient.service';


@Component({
  selector: 'app-add-dish-page',
  templateUrl: './add-dish-page.component.html',
  styleUrls: ['./add-dish-page.component.css']
})
export class AddDishPageComponent implements OnInit {
  userForm: DishForm = new DishForm();
  ingredients: Array<Ingredient> = [];

  constructor(
    private myDishesServ: DishesService,
    private myIngredientServ: IngredientService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.getAllIngredients();
  }

  dishSubmit(){
    this.myDishesServ.addDish(this.userForm)
      .then((response: Dish) => {
        this.myRouterServ.navigateByUrl(`/`)
      })
      .catch((err) => {
        alert('Sorry there was a problem adding the new dish!')
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

}
