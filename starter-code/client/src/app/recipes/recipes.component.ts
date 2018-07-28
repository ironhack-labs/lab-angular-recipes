import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../services/retrieve-dishes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(
    private dishesService: RetrieveDishesService
  ) { }

  dishes:{}

  ngOnInit() {
    this.dishesService.getDishes()
    .subscribe(dishes=>{
      this.dishes = dishes
    })
  }

}
