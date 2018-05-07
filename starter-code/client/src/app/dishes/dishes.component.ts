import { Component, OnInit } from '@angular/core';
import { Recipe, DishesService } from '../api/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Recipe[] = [];

  constructor(
    public apiTruc: DishesService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
      .then((result: Recipe[]) => {
        this.dishes = result;
      })
      .catch((err) => {
        console.log("Dish list error");
        console.log(err);
      });
  }

}
