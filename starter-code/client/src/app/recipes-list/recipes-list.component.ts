import { Component, OnInit } from '@angular/core';
import {DishesService} from '../../service/dishesService';
import {recipes} from '../../interfaces/recipes.interface'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<recipes> = [];

  constructor(public dS: DishesService) { }

  ngOnInit() {
        this.dS.getList()
          .subscribe((recipe) => {
            this.recipes = recipe;
          });
      }

}



