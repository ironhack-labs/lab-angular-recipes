import { Component, OnInit } from '@angular/core';
import { RecetsService } from '../../services/listRecet';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})

export class RecipesDetailsComponent implements OnInit {
  entryRecipe: any;


  constructor( private route: ActivatedRoute, private rec:RecetsService) {
    route.params
    .mergeMap( (p:any) => rec.getRecipe(p.id) )
    .subscribe( entryRecipe => {
      this.entryRecipe = entryRecipe;
    });
   }

  ngOnInit() {
  }
}
