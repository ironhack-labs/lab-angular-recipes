import { Component, OnInit } from '@angular/core';
import { Dish, DishApiService } from '../dish-api.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Array<Dish> = [];

  constructor(
    private myDishServ: DishApiService,
  ) { }

  ngOnInit() {
    this.fetchDishes();
  }

  fetchDishes() {
    this.myDishServ.getDishes()
    .then((response: Array<Dish>) => {
      this.dishes = response;
    })
    .catch((err) => {
      alert('Sorry! We could not get your list of dishes!');
      console.log(err);
    });
  }
}
