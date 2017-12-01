import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishList : Array<any> = [];

  constructor( public dishesService : DishesService) {}

  ngOnInit() {
    this.getDishList();
  }

  getDishList() {
    this.dishesService.getAllDishes().subscribe(dishes => {
      this.dishList = dishes;
    })
  }

}
