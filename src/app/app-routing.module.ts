import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dom22', 
    loadChildren: () => import('./modules/dom22/dom22.module').then(m=>m.Dom22Module), 
    title: 'HomeDom' 
  },
  { 
    path: 'javascript22',
    loadChildren: () => import('./modules/javascript22/javascript22.module').then(m => m.Javascript22Module),
    title: 'Home_Js'
  },
  { 
    path: 'sac1', 
    loadComponent: () => import('./stand-alone_comp/sac1/sac1.component').then(c => c.Sac1Component),
    title: 'sac1_title'
  },
  {
    path: 'sac2', 
    loadComponent: () => import('./stand-alone_comp/sac2/sac2.component').then(c => c.Sac2Component),
    title: 'sac2_title'
  },
  {
    path: 'admin',
    loadChildren: () =>import('./stand-alone_comp/admin-routes23').then(mod => mod.ADMIN_ROUTES)
  },
  {
    path: 'login',
    loadComponent: () =>import('./oauth23/login24/login24.component').then(c => c.Login24Component)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
