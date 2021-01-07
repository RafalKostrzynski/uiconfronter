import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler } from '@angular/core';

import {AppComponent} from './app.component';
import {PagesComponent} from './components/pages/pages.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


import {HeaderComponent} from './components/pages/header/header.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {InterceptorService} from "./components/loader/interceptor.service";
import  {GlobalErrorHandlerService} from './global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
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
