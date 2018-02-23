import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service'

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishesList: Array<any>;

  constructor(private dS:DishesService) { 
    this.dS.getdishesList().subscribe( list => this.dishesList = list );
  }

  ngOnInit() {}

}
