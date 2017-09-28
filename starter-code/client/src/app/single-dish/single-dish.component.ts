import { Component, OnInit } from '@angular/core';
import { DishesService } from './../services/dishes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getDishDetails(params['id'])
    })
  }

  getDishDetails(id){
    this.dishesService.get(id)
    .subscribe( dish => {this.dish = dish})
  }

}
