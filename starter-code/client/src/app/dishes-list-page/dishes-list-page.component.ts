import { Component, OnInit } from '@angular/core';
import { Dish, DishesService, ingredientSubmission } from '../api/dishes.service';
import { IngredientService, Ingredient, ingredientForm } from '../api/ingredient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dishes-list-page',
  templateUrl: './dishes-list-page.component.html',
  styleUrls: ['./dishes-list-page.component.css']
})
export class DishesListPageComponent implements OnInit {
  dishes: Array<Dish> = [];
  userForm: ingredientForm = new ingredientForm();
  classState: any = {
    isHidden: true,
  }

  buttonState: any = {
    isHidden: false
  }

  constructor(
    private myDishServ: DishesService,
    private myIngredientServ: IngredientService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.getAllDishes();
  }

  getAllDishes(){
    this.myDishServ.getDishes()
      .then((response: Array<Dish>) => {
        // console.log(response)
        this.dishes = response;
      })
      .catch((err) => {
        alert("Dishes not able to complete")
      });
  }

  toggleHidden(){
    this.classState.isHidden = !this.classState.isHidden;
    this.buttonState.isHidden = !this.buttonState.isHidden;
  }

  ingredientAdd(){
    this.myIngredientServ.postIngredients(this.userForm)
      .then((response: Ingredient) => {
        this.myRouterServ.navigateByUrl("/");
      })
      .catch((err) => {
        alert("Could not add ingredients");
        console.log(err)
      });
  }
}
