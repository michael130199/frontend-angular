import { Component, OnInit, ViewChild } from '@angular/core';

// // Componentes
// import { AddNewsComponent } from "./components/add-news/add-news.component";
// import { CardNewsComponent } from "./components/card-news/card-news.component";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  public title:string="Modulo De Noticias";


  constructor() { }
  


  ngOnInit() {
    
  }


}
