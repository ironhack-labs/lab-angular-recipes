import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from './../shared/dish.service';

@Component({
  selector: 'app-dish-details',
  template: `
    <h1> Phone details </h1>
    <a [routerLink]="['']"> Back to list </a>

    <div *ngIf="phone">
      <div class="phone-thumbnail">
        <img height="300" [src]="phone.image" />
      </div>

      <div class="phone-info">
        <h2> {{ phone.name }}&nbsp;</h2>
        <h3> {{ phone.brand }} </h3>

        <div *ngIf="phone.specs.length">
          <h4> Features </h4>
          <ul>
            <li *ngFor="let spec of phone.specs"> {{ spec&nbsp;}} </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  providers: [DishService]
})
export class DishDetailsComponent implements OnInit {
  phone: any;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDish(params['id']);
    });
  }

  getDish(id) {
    this.dishService.get(id)
      .subscribe((dish) => {
        this.dish = dish;
      });
  }
}
