import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes : Observable <Array <Object> >;

  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishes = this.dishesService.getList();
  }
}
