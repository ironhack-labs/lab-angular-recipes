// import { Router, Routes } from '@angular/router';
import { DishService } from './../../../shared/services/dish.service';
import { Dish } from './../../../shared/models/dish.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
  dish:Dish;

  constructor(
    private dishService:DishService,
    private routes:ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes
      .parent
      .params.subscribe(params => {
        this.dishService.get(String(params['id']))
          .subscribe(dish => this.dish = dish);
    });
  }

}
