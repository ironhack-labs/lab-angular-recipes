import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes:any = [];

  constructor(
    private dish: DishService
  ) { }

  ngOnInit() {
    this.dish.getDishes()
      .subscribe(dishes => {
        this.dishes = dishes;
      })
  }

}
