import { Component, OnInit } from '@angular/core';
import { IDish } from '../../interfaces/dish';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes:IDish[];

  constructor(private Dishes:DishesService) {
    this.Dishes.getDishes().subscribe( list =>{
      this.dishes = list;
    });
  }

  ngOnInit() {
  }
}
