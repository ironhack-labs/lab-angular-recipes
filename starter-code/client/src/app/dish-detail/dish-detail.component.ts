import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RetrieveDishesService } from '../services/retrieve-dishes.service'
import { IngredientsService } from '../services/ingredients.service'

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  constructor(
    private dishesService : RetrieveDishesService,
    private ingredientService: IngredientsService,
    private activeRoute: ActivatedRoute
  ) { }

  id=""
  dish = {
    ingredients : []
  }
  ingredients = []
  
  getIngredients(){
    this.ingredientService.getIngredients()
    .subscribe(ing=>{
      this.ingredients = ing
    })
  }


  ngOnInit() {
    this.getIngredients()

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.dishesService.getOneDish(this.id)
      .subscribe(res=>{
        this.dish = res
        this.dish.ingredients = this.ingredients
      })
    })
  }

}
