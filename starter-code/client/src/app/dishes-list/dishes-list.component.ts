import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.services';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes:Object[];

  constructor(private dishService:RecipeService) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(
      res => this.dishes = res
    )
  }
}
