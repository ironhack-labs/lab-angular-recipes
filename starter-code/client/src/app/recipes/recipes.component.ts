import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.services'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  dishes:Array<any> = [];
  constructor(public recipesService:RecipesService) {
    this.recipesService.getDishesList().subscribe( list =>
    this.dishes = list)
  }

  ngOnInit() {
  }

}
