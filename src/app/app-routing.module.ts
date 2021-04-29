import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  {
    path: 'auth/sign-up',
    loadChildren: () =>
      import('./auth/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'auth/sign-in',
    loadChildren: () =>
      import('./auth/sign-in/sign-in.module').then((m) => m.SignInModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
