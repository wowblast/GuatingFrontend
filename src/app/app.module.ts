import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalesMaterialModules } from './material';
import { SalesComponent } from './components/sales/sales.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { ProductlistComponent } from './components/product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesListComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SalesMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
