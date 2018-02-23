import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  dishes: Array<object>

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getList()
    .then((dishes) => {
      this.dishes = dishes})
  }

}
