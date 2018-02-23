import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { routes } from './routes';
import { ComiditaComponent } from './comidita/comidita.component';
import { XantaService } from 'services/xantar.service';
import { RecetasolaComponent } from './recetasola/recetasola.component';

@NgModule({
  declarations: [
    AppComponent,
    ComiditaComponent,
    RecetasolaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [XantaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
