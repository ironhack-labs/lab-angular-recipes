import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AllDishesService } from '../services/all-dishes.service';
import { AllIngredientsService } from '../services/all-ingredients.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {

  singleDish: object;
  ingredients$:Observable<any>;
  numberIngredients:number;

  constructor(route: ActivatedRoute, public router: Router, private allDishesService: AllDishesService, private allIngredientsService: AllIngredientsService) {
    route.params.subscribe(params => {
      allDishesService.getDish(params.id).subscribe(singleDish => {
        this.singleDish = singleDish;
      });
      this.ingredients$ = this.allIngredientsService.getIngredients(params.id);
      //this.numberIngredients = this.allIngredientsService.numberIngredients(params.id);
    });
  }

  ngOnInit() {
  }

}
