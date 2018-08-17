import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../retrive-dishes/retrieve-dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [RetrieveDishesService]
})
export class DishesComponent implements OnInit {

  dishes: any;

  constructor(private dish: RetrieveDishesService) { }

  ngOnInit() {
    console.log(this.dish);
    this.dish.getList()
      .subscribe((dishes) => {
        this.dishes = dishes;
      })
  }

}
