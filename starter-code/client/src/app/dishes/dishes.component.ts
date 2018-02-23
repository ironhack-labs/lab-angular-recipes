import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: any;

  constructor(public dishesS: DishesService) {
    this.dishesS.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  ngOnInit() {
  }

}
