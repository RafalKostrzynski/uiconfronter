import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import {HttpClientModule} from "@angular/common/http";

import { HeaderComponent } from './components/pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
