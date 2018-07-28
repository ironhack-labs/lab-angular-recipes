import { Component, OnInit } from '@angular/core';
import { dishesService } from 'services/dishes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipes-single',
  templateUrl: './recipes-single.component.html',
  styleUrls: ['./recipes-single.component.css']
})
export class RecipesSingleComponent implements OnInit {

  dishes : any;
  id : number;

  constructor( public dishesService : dishesService, public router : ActivatedRoute) { 
    this.router.params.subscribe(params => {
      this.dishesService.getOneDish(params.id)
        .subscribe(dishes => {
          this.dishes = dishes;
        })
    });
  }

  ngOnInit() {}
}
