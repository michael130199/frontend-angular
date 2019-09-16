import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from "../../components/compontents.module";


import { ChatComponent } from './chat.component';
import { AvatarComponent } from "./components/avatar/avatar.component";
import { MessengerComponent } from "./components/messenger/messenger.component";
import { MessageComponent } from "./components/message/message.component";
import { MessengerSidebarComponent } from "./components/messenger-sidebar/messenger-sidebar.component";


const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];




@NgModule({
  declarations: [
    ChatComponent,
    AvatarComponent,
    MessengerComponent,
    MessageComponent,
    MessengerSidebarComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule],
  providers: [],
  bootstrap: [ChatComponent]
})

export class ChatModule {}

