import { Component, OnInit } from '@angular/core';
import { DishesService } from './../../services/dishes.service';
import { IngredientsService } from './../../services/ingredients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish:any;
  ingredients: Array<any>;

  constructor(
    public DishesService: DishesService, 
    public IngredientsService: IngredientsService, 
    public route: ActivatedRoute
  ) { }

  // Revisar
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.DishesService.getOneDish().subscribe(data => this.dish = data)
    })
    this.IngredientsService.getIngredients().subscribe(data => this.ingredients = data)
  }
  }
