import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Array<any>;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getDish()
      .then((dishes) => {
        this.dishes = dishes;
      });
  }

}
