import { Component, OnInit } from '@angular/core';
import { DishApiService } from '../../dish-api.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: any[] = [];

  constructor(
    private dishThang: DishApiService
  ) { }

  ngOnInit() {
    this.dishThang.getDishes()
    .subscribe(
      (dishesFromApi: any[]) => {
        this.dishes = dishesFromApi;
      }
    );
  }

}
