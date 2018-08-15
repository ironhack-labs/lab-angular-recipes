import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish: Object = {}

  constructor(
    private route: ActivatedRoute,
    private dishServe: DishService
  ) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(params => id = params.id)
    this.dishServe.getDish(id)
      .subscribe(dish => {
        this.dish = dish
      })
  }

}
