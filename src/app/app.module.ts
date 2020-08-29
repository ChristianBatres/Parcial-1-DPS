import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';


@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
