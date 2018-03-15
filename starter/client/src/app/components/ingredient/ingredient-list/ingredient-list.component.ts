import { Dish } from './../../../shared/models/dish.model';
import { DishService } from './../../../shared/services/dish.service';
import { Router } from '@angular/router';
import { IngredientService } from './../../../shared/services/ingredient.service';
import { Ingredient } from './../../../shared/models/ingredient.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients:Array<Ingredient>;
  dish:Dish;
  @Input() dishId:string="";
  @Output() onCreate: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private dishService:DishService,
    private ingredientService:IngredientService,
    private router:Router
  ) { }

  ngOnInit() {
    this.ingredientService.list()
    .subscribe(ingredients=>this.ingredients=ingredients);
  }

  onSubmitaddIngredient(form:NgForm, ingrId:string){
  
    let quan = form.form.value.quantity;    
    this.dishService.addIngredient(ingrId,this.dishId,quan)
    .subscribe(dish=>{
      this.onCreate.emit(this.dishId);
    });
  }
}
