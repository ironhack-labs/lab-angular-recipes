import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: [DishesService]
})
export class RecipesListComponent implements OnInit {
  dishes : Array<Object>;
  constructor(private dish : DishesService) { }

  ngOnInit() {
    this.dish.getList()
      .subscribe((dish) => {
        this.dishes = dish});
  }
}
