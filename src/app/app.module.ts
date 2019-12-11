import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesMaterialModules } from './material';
import { SalesComponent } from './components/sales/sales.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import interceptors from './components/interceptors'

interceptors.init();

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
