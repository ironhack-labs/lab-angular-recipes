import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ListdishService} from '../services/listdish.service'
import { AppComponent } from './app.component';
import { DisplaydishComponent } from './displaydish/displaydish.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaydishComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListdishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
