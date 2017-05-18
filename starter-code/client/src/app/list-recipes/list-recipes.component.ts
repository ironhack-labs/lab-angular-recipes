import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
  providers: [DishesService]
})
export class ListRecipesComponent implements OnInit {
  dishes;
  constructor(private dish: DishesService) { }

  ngOnInit() {
    this.dish.getDishes()
    .subscribe((dishes) => {
      this.dishes = dishes;
      console.log(dishes)
    })
  }

}
