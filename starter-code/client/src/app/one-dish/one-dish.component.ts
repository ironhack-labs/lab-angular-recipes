import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { RetrieveService } from '../retrieve.service';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-one-dish',
  templateUrl: './one-dish.component.html',
  styleUrls: ['./one-dish.component.css'],
  providers: [RetrieveService, IngredientsService]
})
export class OneDishComponent implements OnInit {
  BASE_URL: string = 'http://localhost:3000'
  singleDish: any;
  ingredients: any;

  constructor(route: ActivatedRoute, public retrieve: RetrieveService, public ingredientsS: IngredientsService, private http: Http) {
   
    route.params.subscribe(params => {
      retrieve.getOneDish(params.id).subscribe(post => {
        this.singleDish = post;
      })
    })
  }

  addIngredient (plato, ingrediente) {
    console.log(plato,ingrediente)
    this.http.post(`${this.BASE_URL}/api/dishes/${plato}/ingredients/${ingrediente}/add`)
  }

  ngOnInit() {
    this.ingredientsS.getIngredients().subscribe(list => this.ingredients = list);
  }

}
