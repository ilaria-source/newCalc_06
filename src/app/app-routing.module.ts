import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./Home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/classic',
    loadChildren: () =>
    import('./classic-mode/classic-mode.module').then( m => m.ClassicModePageModule)
  },
  {
    path: 'home/scientific-mode',
    loadChildren: () => import('./scientific-mode/scientific-mode.module').then( m => m.ScientificModePageModule)
  },
  {
    path: 'programmer-mode',
    loadChildren: () => import('./programmer-mode/programmer-mode.module').then( m => m.ProgrammerModePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
