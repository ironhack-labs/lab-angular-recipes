import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipesFoodService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getDishDetail(params['id'])
    })
  }

  getDishDetail(id) {
    this.recipesFoodService.get(id)
      .subscribe((dish) => {
        this.dish = dish
      })
  }
}
