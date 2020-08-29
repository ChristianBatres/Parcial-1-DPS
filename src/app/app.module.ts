import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';

import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { RegistroComponent } from './registro/registro.component';
import { SueldosComponent } from './sueldos/sueldos.component';


@NgModule({
  declarations: [
    AppComponent,
    ComboBoxComponent,
    RegistroComponent,
    SueldosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
