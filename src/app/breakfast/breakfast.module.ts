import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakfastRoutingModule } from './breakfast-routing.module';
import { BreakfastComponent } from './breakfast.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    BreakfastComponent,
    CardComponent,
  
  ],
  imports: [
    CommonModule,
    BreakfastRoutingModule
  ]
})
export class BreakfastModule { }
