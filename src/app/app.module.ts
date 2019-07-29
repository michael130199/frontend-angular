import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { EditorModule } from '@tinymce/tinymce-angular';
import { ComponentsModule } from './components/compontents.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DataApiService } from './services/data-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    ComponentsModule,
    HttpClientModule
  ],
  exports:[],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
