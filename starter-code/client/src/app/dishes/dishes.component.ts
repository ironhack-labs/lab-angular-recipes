import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishesList: object;

  constructor( public dishesSer: DishesService) {
    this.dishesSer.getList().subscribe( list => this.dishesList = list);
   }

  ngOnInit() {
  }

}
