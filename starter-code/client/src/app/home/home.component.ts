import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { Dish } from 'interfaces/Dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: Array<Dish>;
  constructor(private dishService: DishesService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes)
  }
}
