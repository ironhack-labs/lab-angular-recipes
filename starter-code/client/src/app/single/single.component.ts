import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  dish: any;
  ingredients$: Observable <any>;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private ServiceService: ServiceService,
    private IngredientsS: IngredientsService,
  ) { 
    route.params.subscribe(params => {
      ServiceService.get(params.id).subscribe(dish => {
        this.dish = dish;
      });
    });
  }

  ngOnInit() {
    this.IngredientsS.getIngredients().subscribe(ingredients=>this.ingredients$ = ingredients)
  };

  addIngredient() {
    console.log(this.ingredients$);
    this.IngredientsS.addIngredient(this.dish._id,this.ingredient_id).subscribe(() =>{
      this.refreshComments();
    });
  }

}



