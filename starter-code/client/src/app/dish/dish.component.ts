import { Component, OnInit } from "@angular/core";
import { ListDishService } from "../list-dish.service";

@Component({
  selector: "app-dish",
  templateUrl: "./dish.component.html",
  styleUrls: ["./dish.component.css"],
  providers: [ListDishService]
})
export class DishComponent implements OnInit {
  dishArr: Array<object> = [];

  constructor(private listDishService: ListDishService) {}

  ngOnInit() {
    this.listDishService
    .getListDish().subscribe(listDish => {
      this.dishArr = listDish;
    })
  }
}
