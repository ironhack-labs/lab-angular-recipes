import { Component, OnInit } from '@angular/core';
import { RetrieveDishService } from '../Services/retrieve-dish.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-display-dishes',
  templateUrl: './display-dishes.component.html',
  styleUrls: ['./display-dishes.component.css']
})
export class DisplayDishesComponent implements OnInit {
  dishes$:Observable<any>;
  constructor(private theDish: RetrieveDishService) { }

  ngOnInit() {
    this.dishes$ = this.theDish.getDishes()
  }

}
