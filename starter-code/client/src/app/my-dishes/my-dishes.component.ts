import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../services/retrieve-dishes.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-dishes',
  templateUrl: './my-dishes.component.html',
  styleUrls: ['./my-dishes.component.css']
})
export class MyDishesComponent implements OnInit {
  dishes: Observable<Array<Object>>;
  constructor(private retrieveDishes: RetrieveDishesService) {}

  ngOnInit() {
    this.dishes = this.retrieveDishes.getList();
  }

}
