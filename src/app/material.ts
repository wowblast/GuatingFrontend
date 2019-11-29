import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
    imports: [MatButtonModule, MatListModule, MatCardModule, MatExpansionModule],
    exports: [MatButtonModule, MatListModule, MatCardModule, MatExpansionModule]
})
export class SalesMaterialModules {  }