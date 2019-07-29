import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';



import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/compontents.module';

const routes: Routes = [
  {
    path: '',
    component: ServiceComponent

  }
];


@NgModule({
  declarations: [ServiceComponent],
  exports:[RouterModule],
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ServiceModule { }
