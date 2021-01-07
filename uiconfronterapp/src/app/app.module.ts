import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler } from '@angular/core';
import {AppRoutingModule,routingComponents} from "./app-routing.module";

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {HeaderComponent} from './components/pages/header/header.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {InterceptorService} from "./components/loader/interceptor.service";
import  {GlobalErrorHandlerService} from './global-error-handler.service';
import {MatTableModule} from "@angular/material/table";
import{PagesComponent} from "./components/pages/pages.component";

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true,
  },
    {
    provide: ErrorHandler, useClass: GlobalErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
