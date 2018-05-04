import { Component, OnInit } from "@angular/core";
import { DishesServicesService } from "../dishesServices.service";

export interface Dishes {
  name: string;
  image: string;
}

@Component({
  selector: "app-allDishes",
  templateUrl: "./allDishes.component.html",
  styleUrls: ["./allDishes.component.css"]
})
export class AllDishesComponent implements OnInit {
  dishes: Array<Dishes>;

  constructor(public allDishes: DishesServicesService) {}

  ngOnInit() {
    this.allDishes.retrieveDishes().subscribe(pepe => this.dishes = pepe)
  }
}
