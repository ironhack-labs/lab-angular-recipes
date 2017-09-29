import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dishes-recipes',
  templateUrl: './dishes-recipes.component.html',
  styleUrls: ['./dishes-recipes.component.css']
})
export class DishesRecipesComponent implements OnInit {

  recipes;
  constructor(public DishesService:DishesService) { }

  ngOnInit() {
    this.recipes = this.DishesService.getList();
  }

}
