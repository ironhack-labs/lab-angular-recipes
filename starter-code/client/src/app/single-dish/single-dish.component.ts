import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from '../dishes-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish: Object;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private dishesService: DishesServiceService
  ) {
    route.params.subscribe(params => {
      dishesService.getOne(params.id).subscribe(dish => {
        console.log(dish);
        this.dish = dish;
      });
    });
  }

  ngOnInit() {}
}
