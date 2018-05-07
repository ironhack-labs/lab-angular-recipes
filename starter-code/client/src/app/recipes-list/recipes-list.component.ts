import { Component, OnInit } from '@angular/core';
import { DishesService, Dish } from '../api/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public dishes: Array<Dish> = [];

  constructor(
    public apiTruc: DishesService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result: Array<Dish>) => {
      this.dishes = result;
    })
    .catch((err) => {
      console.log('Phone list error');
      console.log(err);
    });
  }

}
