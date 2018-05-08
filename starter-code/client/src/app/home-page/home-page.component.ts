import { Component, OnInit } from '@angular/core';
import { DishesService, Dish } from '../api/dishes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  dishes: Array<Dish> = [];

  constructor(
    public apiTruc: DishesService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result: Array<Dish>) => {
      this.dishes = result;
      console.log(result);

    })
    .catch((err) => {
      console.log("Recipes List Error");
    })
  }

}
