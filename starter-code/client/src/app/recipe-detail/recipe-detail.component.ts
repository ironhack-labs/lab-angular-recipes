import { Component, OnInit } from '@angular/core';
import { dishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: String;
  name: String;
  image:String;
  description:String;
  constructor(private route: ActivatedRoute, private recipeServ :dishesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params=>{
        this.id=params['id'];
        this.recipeServ.getEntry(this.id)
          .subscribe(item =>{
            this.name=item.name;
            this.image=item.image;
            this.description=item.description;
          })
    });
  }

}
