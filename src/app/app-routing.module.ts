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
    path: 'launch',
    loadChildren: () =>
      import('./launch/launch.module').then((m) => m.LaunchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
