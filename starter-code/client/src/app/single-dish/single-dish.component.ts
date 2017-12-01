import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDish } from '../../interfaces/dish';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  recipe: any;

  constructor(
    public router: Router,
    public dishes: DishesService,
    public route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.dishes.getSingleDish(params['slug'])
        .subscribe(dish => this.recipe = dish);
    })
  }

  ngOnInit() {
    console.log(this.recipe)
  }

}
