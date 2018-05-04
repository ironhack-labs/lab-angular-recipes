import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AllDishesService } from '../services/all-dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes$:Observable<any>;
  dishes:Array<any> = [];

  constructor(private allDishesService:AllDishesService, public router: Router) {}

  ngOnInit() {
    this.dishes$ = this.allDishesService.getList();
  }

}
