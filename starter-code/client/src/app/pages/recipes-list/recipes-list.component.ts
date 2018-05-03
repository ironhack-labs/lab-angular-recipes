import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../../services/dishes-list.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  dishes: Array<any>;

  constructor(private dishesListService: DishesListService) { }

  ngOnInit() {
    this.dishesListService.listAll()
      .then((data) => {
        this.dishes = data;
      });
  }

}
