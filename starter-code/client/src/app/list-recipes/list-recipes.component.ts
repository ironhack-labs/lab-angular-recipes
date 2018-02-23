import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../../services/retrieve.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  recipeList:Array<any>;
  constructor(public pS:RetrieveService) { 
    this.pS.getList().subscribe(list => this.recipeList = list);
   
  }

  ngOnInit() {
  }

}
