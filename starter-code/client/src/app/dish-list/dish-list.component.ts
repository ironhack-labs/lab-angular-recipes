import { Component, OnInit } from '@angular/core';
import { DishApiService } from '../services/dish-api.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  providers: [DishApiService]
})
export class DishListComponent implements OnInit {

  myDishList;
  constructor(private dishService: DishApiService) { }

  ngOnInit() {
    this.dishService.getList()
      .subscribe((dishesResult) => {
        this.myDishList = dishesResult;
      });
  }

}
