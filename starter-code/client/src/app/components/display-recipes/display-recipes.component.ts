import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.css']
})
export class DisplayRecipesComponent implements OnInit {
  dishesList: Array<object>;

  constructor(private dishesService: DishesService) {
    dishesService.retrieveAll()
      .then((result) => {
        this.dishesList = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
