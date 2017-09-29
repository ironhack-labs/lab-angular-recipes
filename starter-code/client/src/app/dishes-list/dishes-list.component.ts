import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../services/recipes.service';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
dishes;
  constructor(public recipesFoodService : RecipesService) { }

  ngOnInit() {
    this.recipesFoodService.getList().subscribe(result => this.dishes=result)
  }

}
