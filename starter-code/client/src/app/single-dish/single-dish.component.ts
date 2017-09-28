import { Component, OnInit } from '@angular/core';
import { DishesService } from './../services/dishes.service';
import { IngredientsService } from './../services/ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css'],
  providers: [IngredientsService]

})
export class SingleDishComponent implements OnInit {
  dish;
  ingredients;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getDishDetails(params['id'])
    })
    this.ingredientsService.getList()
      .subscribe(i => {
        this.ingredients = i;
      });
  }

  getDishDetails(id){
    this.dishesService.get(id)
    .subscribe( dish => {this.dish = dish})
  }


}
