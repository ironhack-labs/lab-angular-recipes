import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  dish: any;
  constructor(private route: ActivatedRoute, private dishesService:DishesService) {
    route.params
    .mergeMap( (e:any) => dishesService.get(e.id))
    .subscribe( dish => {
      console.log(dish);
      this.dish=dish;
    });
  }

  ngOnInit() {
    console.table(this.dish);
  }

}
