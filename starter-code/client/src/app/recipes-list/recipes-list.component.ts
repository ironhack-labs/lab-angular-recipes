import { Component, OnInit } from '@angular/core';
import { DishesService, Dish } from '../dishes.service';
import { resolve } from 'url';
// import { DishesService, Recipe } from 'dishes.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})


export class RecipesListComponent implements OnInit {
  dishes: Array<Dish> = [];

  constructor(
    private myDishesServ: DishesService
  ) { }

  ngOnInit() {
    this.getAllDishes()
  }

  getAllDishes() {
    this.myDishesServ.getDishes()
    .then((response: Array<Dish>) => {
      console.log(response);
      // connects the DATA from the API to the COMPONENT state
      // this.phones = response;
      this.dishes = response
    })
    .catch((err) => {
      alert("Sorry! Please fix this error immediately.");
      console.log(err);
    });
  }
}
