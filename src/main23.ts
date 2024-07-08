import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BootstrapChild1Component } from '../src/app/bootstrap44/bootstrap-child1/bootstrap-child1.component';
import { BootstrapChild2Component } from '../src/app/bootstrap44/bootstrap-child2/bootstrap-child2.component';
import { MatButtonModule } from '@angular/material/button';


const lazyLoadedRoutes23 = [
    {   // export class LazyChild1Component
        path: 'lazy1', loadComponent: () => import('../src/app/lazyRoutes12/lazy-child1/lazy-child1.component')
            .then (c => c.LazyChild1Component)
    },
    { 
        //  export default class LazyChild2Component --> router unwraps default imports... no need to use .then()
        path: 'lazy2', loadComponent: () => import('../src/app/lazyRoutes12/lazy-child2/lazy-child2.component')
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
    },
    { 
        path: 'backend23',
        loadComponent: () => import('../src/app/lazyRoutes12/backend23/backend23.component')
            .then (c => c.Backend23Component)
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
//   template: `<div>just template babai</div>`,
  templateUrl: './main23.html',
})
export class BootstrapDirectly12Component {
    jingChak:string = 'Despacito is the most viewed song on youtube... ';
}
const secondParam = { 
    providers: [ 
        importProvidersFrom(RouterModule.forRoot(lazyLoadedRoutes23)),
        importProvidersFrom(MatButtonModule)
    ]
}
bootstrapApplication(BootstrapDirectly12Component, secondParam).catch((err) => console.error(err));