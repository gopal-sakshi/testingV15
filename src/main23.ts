import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BootstrapChild1Component } from '../src/app/bootstrap44/bootstrap-child1/bootstrap-child1.component';
import { BootstrapChild2Component } from '../src/app/bootstrap44/bootstrap-child2/bootstrap-child2.component';

const lazyLoadedRoutes23 = [
    { 
        path: 'lazy1', loadComponent: () => import('../src/app/lazyRoutes12/lazy-child1/lazy-child1.component')
            .then (c => c.LazyChild1Component)
    },
    { 
        path: 'lazy2', loadComponent: () => import('../src/app/lazyRoutes12/lazy-child2/lazy-child2.component')
            .then (c => c.LazyChild2Component)
    },
    { 
        path: 'host-directives12', 
        loadComponent: () => import('../src/app/lazyRoutes12/host-directives12/host-directives12.component')
            .then (c => c.HostDirectives12Component)
    },
    { 
        path: 'host-directives13',
        loadComponent: () => import('../src/app/lazyRoutes12/host-directives13/host-directives13.component')
            .then (c => c.HostDirectives13Component)
    }
]

@Component({
  standalone: true,
  selector: 'bootstrap-directly12',
  imports: [ 
    CommonModule, RouterModule,   
    BootstrapChild1Component,
    BootstrapChild2Component,
 ],
  template: `
    <app-bootstrap-child1></app-bootstrap-child1>
    <app-bootstrap-child2 [input23] = "'jingChak'"></app-bootstrap-child2>
    <a routerLink="lazy1">lazy1</a>
    <a routerLink="lazy2">lazy2</a>
    <a routerLink="host-directives12">host-directives12</a>
    <a routerLink="host-directives13">host-directives13</a>
    <router-outlet></router-outlet>
  `,
})
export class BootstrapDirectly12Component {
    jingChak:string = 'Despacito is the most viewed song on youtube... ';
}
const secondParam = { 
    providers: [ importProvidersFrom(RouterModule.forRoot(lazyLoadedRoutes23)) ]
}
bootstrapApplication(BootstrapDirectly12Component, secondParam).catch((err) => console.error(err));