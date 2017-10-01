import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../services/dishes-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  details: any = {};

  constructor(
    private dishService: DishesListService,
    private urlReader: ActivatedRoute
  ) { }

  ngOnInit() {
    this.urlReader.params
      .subscribe(
        (params) => {
          this.dishService.getDetails(params.id)
            .subscribe(
              (data) => {
                this.details = data;
              }
            )
        }
      )
  }

}
