import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishApiService } from '../services/dish-api.service';
import { IngredientApiService } from '../services/ingredient-api.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css'],
  providers: [ DishApiService, IngredientApiService ]
})
export class DishDetailsComponent implements OnInit {

  myDish: any;
  myIngredients: any;

  constructor(
    private route : ActivatedRoute,
    private dishService : DishApiService,
    private ingredienteService: IngredientApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getDishDetails(params['id']);
    });

    this.route
  }

  getDishDetails(id) {
    this.ingredienteService.getList()
      .subscribe((ingredientsResult) => {
        this.myIngredients = ingredientsResult;
      });
    
    this.dishService.get(id)
    .subscribe((dishResult) => {
      this.myDish = dishResult;
    });
  }

  addIngredient(id, qty){
   console.log(id) 
   console.log(qty) 
  }



}
