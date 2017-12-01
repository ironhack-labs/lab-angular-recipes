import { Component, OnInit } from '@angular/core';
import {  DishesService } from '../../service/dishes.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {

  dishes:Array<any> = [];
  dish:any;

  constructor(public route:ActivatedRoute, public dishesSer: DishesService ) {
    this.dishesSer.getDishesList().subscribe(dish =>{
      this.dishes = dish;
    });
  }

  ngOnInit() {

  }

}
