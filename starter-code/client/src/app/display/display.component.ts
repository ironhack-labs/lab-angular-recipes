import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../service/retrieve.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  dishes;
  constructor( public retrieve:RetrieveService) { }

  ngOnInit() {
    this.retrieve.getAll().subscribe( e => {
      this.dishes = e
      console.log(this.dishes)
    });
  }

}
