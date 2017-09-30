import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies;

  constructor(public dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getList()
    .subscribe(
      (data) => {
        this.recipies = data
      },
      (err) => {
        console.log(this.recipies);
      });
    }
  }
