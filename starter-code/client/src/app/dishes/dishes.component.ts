import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service'

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishList : Array<any> = [];

  constructor( public dishesService : RecipesService) {}

  ngOnInit() {
    this.getDishList();
  }

  getDishList() {
    this.dishesService.getAllDishes().subscribe(dishes => {
      this.dishList = dishes;
    })
  }

}
