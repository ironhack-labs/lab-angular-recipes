import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  dishes;
  constructor( public dishesService: DishesService ) { }

  ngOnInit() {
     this.dishesService.getList().subscribe(result => this.dishes = result);
  }

}
