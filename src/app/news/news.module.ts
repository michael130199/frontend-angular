import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './components/add-news/add-news.component'

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  }
];

@NgModule({
  declarations: [NewsComponent, AddNewsComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
