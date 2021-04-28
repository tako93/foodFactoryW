import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'breakfast',
    loadChildren: () =>
      import('./breakfast/breakfast.module').then((m) => m.BreakfastModule),
  },
  {
    path: 'mainPage',
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full',
  },
  {
    path: 'lunch',
    loadChildren: () =>
      import('./lunch/lunch.module').then((m) => m.LunchModule),
  },
  {
    path: 'dinner',
    loadChildren: () =>
      import('./dinner/dinner.module').then((m) => m.DinnerModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
