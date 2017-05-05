import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormPoster } from "services/form-poster.services";

import { RatingModule, DatepickerModule, TimepickerModule, ButtonsModule } from 'ngx-bootstrap'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    RatingModule.forRoot()
    
  ],
  providers: [FormPoster],
  bootstrap: [AppComponent]
})
export class AppModule { }
