import { Component, OnInit } from '@angular/core';
import {RecepieControllerService} from '../../services/recepieController.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recepiesList: Array<any>;
  constructor(public recepieSrv:RecepieControllerService) {

    this.recepieSrv.getList().subscribe(list=> this.recepiesList = list);

   }

  ngOnInit() {
  }

}
