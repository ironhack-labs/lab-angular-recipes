import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [DishesService]
})
export class RecipeListComponent implements OnInit {
  dishes;

  constructor( private dish: DishesService ) { }

  ngOnInit() {
    this.dish.getDishes()
      .subscribe((dishes) => {
        this.dishes = dishes;
      })
  }

}
