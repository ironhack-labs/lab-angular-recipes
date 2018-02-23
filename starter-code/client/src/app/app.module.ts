import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComiditaListComponent } from './comidita-list/comidita-list.component';
import { ComiditaDetailComponent } from './comidita-detail/comidita-detail.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

import { JalufaService } from 'services/jalufa.service';
import { IngredienticosService } from 'services/Ingredienticos.service';

@NgModule({
  declarations: [
    AppComponent,
    ComiditaListComponent,
    ComiditaDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JalufaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
