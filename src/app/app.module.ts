import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesMaterialModules } from './material';
import { SalesComponent } from './components/sales/sales.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
//import interceptors from './components/interceptors'
import { MatSnackBarModule } from '@angular/material'
import { AuthInterceptor } from './components/AuthInterceptor'

//interceptors.init();

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SalesMaterialModules,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
