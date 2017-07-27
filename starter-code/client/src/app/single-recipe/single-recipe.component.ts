import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})

export class SingleRecipeComponent implements OnInit {

  dish: any;
  constructor(public route: ActivatedRoute, public dishserv: DishesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetail(params['id']);
    });
  }

  getDishDetail(id) {
    this.dishserv.getDish(id)
      .subscribe((dish) => {
        console.log(dish);
        this.dish = dish;
      });
  }

}
