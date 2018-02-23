import { Component, OnInit } from '@angular/core';
import { JalufaService } from 'services/jalufa.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-comidita-detail',
  templateUrl: './comidita-detail.component.html',
  styleUrls: ['./comidita-detail.component.css']
})
export class ComiditaDetailComponent implements OnInit {
   comidita:any;

  constructor( 
    public cD: JalufaService,
    private router :Router,
    private route:ActivatedRoute 
    ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getComiditaId(params['id']);
    })
  }

  getComiditaId(id){
    this.cD.get(id).subscribe((comidita => this.comidita = comidita))
  }

}
