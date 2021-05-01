import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast.component';

const routes: Routes = [{ path: 'breakfast', component: BreakfastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakfastRoutingModule { }
