import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
recipes:any[];
  constructor( public recipesService:RecipesService) { }

  ngOnInit() {
this.recipesService.getRecipes()
.subscribe((recipes)=>{
this.recipes=recipes;
})
  }

}
