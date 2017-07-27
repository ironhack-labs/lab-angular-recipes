import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']

})

export class RecipesListComponent implements OnInit {

  dishes: Observable<Array<Object>>;
  constructor(private dishserv: DishesService) { }

  ngOnInit() {
    this.dishserv.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

}
