import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-one-dish',
  templateUrl: './one-dish.component.html',
  styleUrls: ['./one-dish.component.css']
})
export class OneDIshComponent implements OnInit {

  id: number;
  dish: Object;

  constructor( 
    private dishesService : DishesService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params) => { 
      this.id = params.id;
      this.dish = this.dishesService.getOneDish(this.id)
        .then( data => this.dish = data);
    });
  }
}