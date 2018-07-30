import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listdishes',
  templateUrl: './listdishes.component.html',
  styleUrls: ['./listdishes.component.css']
})
export class ListdishesComponent implements OnInit {
  list:Array<Object>;
  constructor(private dS: DishesService) { }

  ngOnInit() {

    this.dS.getDishes().subscribe(list=>this.list=list)
  }

}
