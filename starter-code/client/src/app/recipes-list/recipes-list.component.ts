import { Component, OnInit } from "@angular/core";
import { Dish, DishesService } from "../api/dishes.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  dishes: Array<Dish>;

  constructor(private myDishServ: DishesService) {}

  ngOnInit() {
    this.fetchDishes();
  }

  fetchDishes() {
    this.myDishServ
      .getList()
      .then((response: Array<Dish>) => {
        //console.log(response);
        this.dishes = response;
      })
      .catch(err => {
        alert("Sorry! We wouldn't get our list of dishes :(");
        console.log(err);
      });
  }
}
