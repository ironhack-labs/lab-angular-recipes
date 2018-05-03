import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'services/dish.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { IngredientsService } from 'services/ingredients.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish:any;
  ingredient:Array<any> =[]; 

  constructor(

    route: ActivatedRoute,
    public router: Router,
    private dishService: DishService,
    private ingredientsService: IngredientsService
  ) {
    route.params.subscribe(params => {
      dishService.getDish(params.id).subscribe(dish => {
        this.dish = dish;
      })
    })
  }
  ngOnInit() {
    this.ingredientsService.getListIngredients().subscribe(ingredient =>{
      this.ingredient = ingredient;
    })
  }

};


 