import { NgModule } from '@angular/core';
import { CardNewsComponent } from './card-news/card-news.component';
import { ContentNewsComponent } from './content-news/content-news.component';
import { ListComponent } from './list/list.component';
// import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { SlideServiceComponent } from './slide-service/slide-service.component';


@NgModule({
  declarations: [ 
    CardNewsComponent, 
    ContentNewsComponent, 
    ListComponent, ChatComponent, 
    NavbarComponent, 
    SlideServiceComponent ],
  exports: [ 
    CardNewsComponent, 
    ContentNewsComponent, 
    NavbarComponent, 
    SlideServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
