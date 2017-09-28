import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { IngredientsService } from '../ingredients.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css']
})
export class DishesDetailsComponent implements OnInit {
  dishes;
  ingredients;
  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public dishesservice: DishesService,
    public ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishesDetails(params['id'])
      this.ingredients = this.ingredientsService.getList();
      console.log(this.ingredients)
    });
  }

  getDishesDetails(id){
    this.dishesservice.get(id).subscribe((dishes) => {
      this.dishes = dishes
    })
  }
}
