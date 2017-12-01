import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDish } from '../../interfaces/dish';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes:IDish[];

  constructor(private Dishes:DishesService, private router:Router) {
    this.Dishes.getDishes().subscribe( list => this.dishes = list);
  }

  ngOnInit() {
  }

  viewDetails(slug){
    this.router.navigate(['recipe', slug]);
  }
}
