import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDomComponent } from './home-dom/home-dom.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { RouterModule, Routes } from '@angular/router';

const routes23:Routes = [
  { path: '', component: HomeDomComponent }
]

@NgModule({
  declarations: [
    HomeDomComponent,
    DynamicComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes23)
  ]
})
export class Dom22Module { }
