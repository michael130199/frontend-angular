import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { UpdateNewsComponent } from './components/update-news/update-news.component';
import { ComponentsModule } from '../../components/compontents.module';
import { ListComponent } from '../../components/list/list.component';




const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [//admin-panel/lo que sea
      {path: 'agregar', component: AddNewsComponent},
      {path: 'modificar', component: UpdateNewsComponent},
      {path: 'list' , component: ListComponent }
    ]

  }
];

@NgModule({
  declarations: [NewsComponent, AddNewsComponent, UpdateNewsComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    EditorModule,
    ComponentsModule
  ]
})
export class NewsModule { }
