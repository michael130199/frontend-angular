import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonModule } from '@angular/common'
import { ListComponent } from './components/list/list.component';

const routes: Routes = [

  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'news',
    loadChildren: './modules/news/news.module#NewsModule'
  },
  {
    path: 'calendar',
    loadChildren: './modules/calendar/calendar.module#CalendarModule'
  },
  {
    path: 'service',
    loadChildren: './modules/service/service.module#ServiceModule'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'chat',
    loadChildren: './modules/chat/chat.module#ChatModule'
  },
  {
    path:'**',
    component: ListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
