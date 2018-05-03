import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { DishService } from 'services/dish.service';

@Component({
  selector: 'app-list-dish',
  templateUrl: './list-dish.component.html',
  styleUrls: ['./list-dish.component.css']
})
export class ListDishComponent implements OnInit {
  dishes:Array<any> = [];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getList().subscribe(recipe => {
      this.dishes = recipe;
    });
  }

}
