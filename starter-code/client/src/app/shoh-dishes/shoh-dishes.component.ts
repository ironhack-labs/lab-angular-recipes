import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';


@Component({
  selector: 'app-shoh-dishes',
  templateUrl: './shoh-dishes.component.html',
  styleUrls: ['./shoh-dishes.component.css']
})
export class ShohDishesComponent implements OnInit {

  constructor(public api: DishesService) { }
  dishes: any

  ngOnInit() {
    this.api.getDishes().subscribe(res =>
      this.dishes = res
    );
    }



}
