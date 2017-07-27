import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ListdishService} from '../../services/listdish.service'

@Component({
  selector: 'app-displaydish',
  templateUrl: './displaydish.component.html',
  styleUrls: ['./displaydish.component.css']
})
export class DisplaydishComponent implements OnInit {
  dishesArray: Observable<Array<Object>>;

  constructor(private dishElement: ListdishService ) { }

  ngOnInit() {
    this.dishElement.getDishes()
 .subscribe((dishesArray) => this.dishesArray = dishesArray)
  }

}
