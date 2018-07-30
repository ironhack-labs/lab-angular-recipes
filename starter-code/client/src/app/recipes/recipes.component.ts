import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DishesService } from '../dishes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [DishesService]
})
export class RecipesComponent implements OnInit {

  recipes: Array<object>;

  constructor(
    private router:Router,
    private dishesService: DishesService
  ) { }

  ngOnInit() {
    this.dishesService.getAllRecipes()
    .subscribe(recipes=>{
      this.recipes = recipes;
    })
  }

}
