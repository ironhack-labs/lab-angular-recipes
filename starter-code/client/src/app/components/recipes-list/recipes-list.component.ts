import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  dishes: Array<any>;

  constructor(private dishesService: DishesService) { 
    console.log('ok');
  }

  ngOnInit() {
    this.dishesService.getDishes()
    .then((dishes) => {
      this.dishes = dishes;
      console.log(dishes);
      }
    );
  }

}
