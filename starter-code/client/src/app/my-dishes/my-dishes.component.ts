import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-my-dishes',
  templateUrl: './my-dishes.component.html',
  styleUrls: ['./my-dishes.component.css']
})
export class MyDishesComponent implements OnInit {

  dishesList : Array<any> = [];

  constructor(public dishesService: DishesService) { }

  ngOnInit() {
    this.getDishesList();
  }

  getDishesList() {
    this.dishesService.getAllDishes().subscribe(dishes => {
      this.dishesList = dishes;
    })
  }

}
