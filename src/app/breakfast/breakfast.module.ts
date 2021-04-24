import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakfastRoutingModule } from './breakfast-routing.module';
import { BreakfastComponent } from './breakfast.component';


@NgModule({
  declarations: [
    BreakfastComponent
  ],
  imports: [
    CommonModule,
    BreakfastRoutingModule
  ]
})
export class BreakfastModule { }
