import { Component, OnInit } from '@angular/core';

import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: Array<any>;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getAllDishes()
    .then((result) => {
      this.dishes = result;
    });
  }

}
