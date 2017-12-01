import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDish } from '../../interfaces/dish';
import { IIngredient } from '../../interfaces/ingredient';
import { DishesService } from '../../services/dishes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css'],
  providers: [IngredientsService]
})
export class SingleDishComponent implements OnInit {
  recipe: IDish;
  listOfIngredients: IIngredient[];

  constructor(
    public router: Router,
    public dishes: DishesService,
    public route: ActivatedRoute,
    public ingredients: IngredientsService,
    private http: Http) {
    route.params.subscribe(params => {
      dishes.getSingleDish(params['slug'])
        .subscribe(dish => this.recipe = dish);
    })
    ingredients.getIngredients()
      .subscribe(ingredients => this.listOfIngredients = ingredients);
  }

  ngOnInit() {
  }

  add(dishId:string, id:string, slug:string):void {
    const body = {quantity : 1}
    this.http.post('http://localhost:3000/api/dishes/' + dishId + '/ingredients/' + id + '/add', body)
      .map(res => <IDish>res.json())
      .subscribe(dish => this.recipe = dish);
  }

}
