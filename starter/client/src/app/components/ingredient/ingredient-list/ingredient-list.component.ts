import { Router } from '@angular/router';
import { IngredientService } from './../../../shared/services/ingredient.service';
import { Ingredient } from './../../../shared/models/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredients:Array<Ingredient>;

  constructor(
    private ingredientService:IngredientService,
    private router:Router
  ) { }

  ngOnInit() {
    // debugger;
    this.ingredientService.list()
    .subscribe(ingredients=>this.ingredients=ingredients);
  }

}
