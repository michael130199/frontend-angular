import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from "@angular/router";

import { ComponentsModule } from '../../components/compontents.module';



const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];


@NgModule({
  declarations: [ProfileComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class ProfileModule { }
