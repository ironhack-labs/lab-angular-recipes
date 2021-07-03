import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DishesService } from '../dishes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [DishesService]

})
export class RecipeDetailComponent implements OnInit {

  constructor(
    private router:Router,
    private dishesService: DishesService,
    private activeRoute: ActivatedRoute) { }

    id:any
    recipe:any

  ngOnInit() {

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
    })
  
      this.dishesService.getRecipe(this.id)
      .subscribe(recipe=>{
        this.recipe = recipe;
      })

  }

}
