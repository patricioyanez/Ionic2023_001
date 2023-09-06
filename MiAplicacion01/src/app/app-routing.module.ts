import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dos',
    loadChildren: () => import('./dos/dos.module').then( m => m.DosPageModule)
  },
  {
    path: 'uno',
    loadChildren: () => import('./uno/uno.module').then( m => m.UnoPageModule)
  },
  {
    path: 'tres',
    loadChildren: () => import('./tres/tres.module').then( m => m.TresPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cuatro',
    loadChildren: () => import('./cuatro/cuatro.module').then( m => m.CuatroPageModule)
  },
  {
    path: 'cinco',
    loadChildren: () => import('./cinco/cinco.module').then( m => m.CincoPageModule)
  },
  {
    path: 'seis',
    loadChildren: () => import('./seis/seis.module').then( m => m.SeisPageModule)
  },
  {
    path: 'siete',
    loadChildren: () => import('./siete/siete.module').then( m => m.SietePageModule)
  },
  {
    path: 'ocho',
    loadChildren: () => import('./ocho/ocho.module').then( m => m.OchoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
