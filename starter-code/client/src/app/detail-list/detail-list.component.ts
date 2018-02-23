import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishesService } from 'app/services/dishes.service';
import { IngredientsService } from 'app/services/ingredients.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  recipe: any;
  ingredient: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesService: DishesService,
    private ingredientsService: IngredientsService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
    this.ingredientsService.getIngredient()
    .subscribe((ing) => {
      this.ingredient = ing,
      console.log("el siguiente console.log lista los ingredientes, pero estan vacios...")
        console.log(ing)
    })
  }
  getDishDetails(id) {
    this.dishesService.get(id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }
 }



