import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../services/dishes-list.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  newDish: any = {};

  constructor(
    private dishService: DishesListService
  ) { }

  ngOnInit() {
  }

  addNewDish(dish) {
    console.log('Here --> New Dish');
    this.dishService.postDish(this.newDish)
      .subscribe(
        (data) => {
          console.log("Success! --> ", data );
        }
      )
    this.newDish = {};
  }

}
