import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DishesService} from '../../service/dishesService';
import {recipes} from '../../interfaces/recipes.interface';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  constructor(
    private route: ActivatedRoute,
    public dS: DishesService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      console.log(params)
      this.getListDetails(params.id);
    });
  }

  getListDetails(id) {
    this.dS.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });

  }

}



