import { Component, OnInit } from '@angular/core';
import { DishesService, Dishes } from '../api/dishes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  dishes: Dishes[] = [];

  constructor(
    public apiTruc: DishesService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result: Dishes[]) => {
    this.dishes = result
  })
  .catch((err) => {
    console.log("Dish list error")
    console.log(err)
  })

}
}
