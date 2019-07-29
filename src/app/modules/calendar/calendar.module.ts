import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/compontents.module'


const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  }
];



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports:[
    RouterModule
  ]
})
export class CalendarModule { }
