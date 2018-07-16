import { Component, OnInit } from '@angular/core';
import { RecipeService, Dish } from '../api/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Array<Dish> = []; // have to be imported! mongoose model + export class recipe service
  
  constructor(
    private myRecipeServ: RecipeService
  ) { }

  ngOnInit() {
    this.fetchDishes()
  }

  fetchDishes() {
    this.myRecipeServ.getList()
      .then((response: Array<Dish>) => {
        this.recipes = response;
        console.log(response);
      })
      .catch((err) => {
        alert("Sorry we cannot display the list of recipes");
        console.log(err);
      })
  }
  

}
