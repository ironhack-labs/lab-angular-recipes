import { Component, OnInit } from '@angular/core';
import { XantaService } from 'services/xantar.service';

@Component({
  selector: 'app-comidita',
  templateUrl: './comidita.component.html',
  styleUrls: ['./comidita.component.css']
})
export class ComiditaComponent implements OnInit {

  recipes:Array<any>;

  constructor(private XS:XantaService) {
    this.XS.tuComidita().subscribe(list => this.recipes = list)
   }

  ngOnInit() {
  }

}
