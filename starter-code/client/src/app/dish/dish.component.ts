import { DishesService } from './../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  dish;

  constructor(
    private routes: ActivatedRoute,
    private dishesService: DishesService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe( params => {
      this.getDishDetails(params['id']);
    });
  }

  getDishDetails(id){
    this.dishesService.get(id)
      .subscribe(dish => this.dish = dish);
  }

}
