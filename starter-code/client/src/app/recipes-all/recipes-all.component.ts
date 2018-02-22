import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'services/recipes.service';

@Component({
  selector: 'app-recipes-all',
  templateUrl: './recipes-all.component.html',
  styleUrls: ['./recipes-all.component.css']
})
export class RecipesAllComponent implements OnInit {

  recipes:Object;
  constructor(private recServ:RecipeService) {
    this.recServ.getRecipes().subscribe(list => this.recipes = list)
   }

  ngOnInit() {
  }


}
