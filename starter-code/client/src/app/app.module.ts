import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JalufaService } from 'services/jalufa.service';
import { ComiditaListComponent } from './comidita-list/comidita-list.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ComiditaListComponent,
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
