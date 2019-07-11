import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { CardNewsComponent } from './components/card-news/card-news.component'

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [//admin-panel/lo que sea
      {path: 'agregar', component: AddNewsComponent}
      
  ]

  }
];

@NgModule({
  declarations: [NewsComponent, AddNewsComponent, CardNewsComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
