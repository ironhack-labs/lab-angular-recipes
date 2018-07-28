import { Component, OnInit } from '@angular/core';
import { dishesService } from '../../services/dishes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  providers: [dishesService],
})

export class RecipesListComponent implements OnInit {
  dishes : Array<Object> = [];

  constructor(public dishesService : dishesService, public router : Router) { 
    
    this.dishesService.getDishesList()
      .subscribe((dishes) => {
        this.dishes = dishes;
      });
  }

  ngOnInit() {}
}
