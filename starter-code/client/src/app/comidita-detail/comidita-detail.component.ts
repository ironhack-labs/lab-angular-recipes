import { Component, OnInit } from '@angular/core';
import { JalufaService } from 'services/jalufa.service';
import { ActivatedRoute,Router } from '@angular/router';
import { IngredienticosService } from 'services/Ingredienticos.service';


@Component({
  selector: 'app-comidita-detail',
  templateUrl: './comidita-detail.component.html',
  styleUrls: ['./comidita-detail.component.css'],
  providers:[IngredienticosService]
})
export class ComiditaDetailComponent implements OnInit {
  comidita:any;

  ingredients:Array<string>;

  constructor( 
    public cD: JalufaService,
    private router :Router,
    private iS : IngredienticosService,
    private route:ActivatedRoute 
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getComiditaId(params['id']);
      
    })
  }

  getComiditaId(id){
    this.cD.get(id).subscribe((comidita => this.comidita = comidita));
    this.iS.getIngredients().subscribe((ingredients) => this.ingredients = ingredients)
  }

}
