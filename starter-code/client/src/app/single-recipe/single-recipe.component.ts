import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { EntryListService } from '../dishes.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  item;
  constructor(private entryListService: EntryListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( id => {
      this.entryListService.get(id).subscribe((recip)=>{
        this.item=recip;
      })
    })
  }



}
