import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatSelectModule],
    exports: [
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatSelectModule]
})
export class SalesMaterialModules {  }