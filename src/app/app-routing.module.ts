import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { ProductlistComponent} from './components/product-list/product-list.component';

const routes: Routes = [
  {path: 'sales', component: SalesComponent},
  {path: 'productClientList', component: ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
