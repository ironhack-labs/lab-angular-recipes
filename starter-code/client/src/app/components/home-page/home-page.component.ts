import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dishes: Array<any>;

  constructor(private dishService: DishService ) {
    this.dishService.getList()
    .then((dishes) => {
    this.dishes = dishes});
   }

  ngOnInit() {
   
  }

}
