import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunchComponent } from './lunch.component';

const routes: Routes = [{ path: '', component: LunchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunchRoutingModule { }
