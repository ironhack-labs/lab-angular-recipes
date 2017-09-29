import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [IngredientsService]

})
export class EntryListComponent implements OnInit {
  dishes;
  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
      .subscribe(d => {
        this.dishes = d;
      });
  }

}
