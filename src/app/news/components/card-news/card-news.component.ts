import { Component, Input } from '@angular/core';

// // componentes
// import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})

export class CardNewsComponent  {  

  @Input() day:number;
  @Input() month:number;
  @Input() year:number;
  
  @Input() title:string;
  @Input() descrip:string;
  @Input() author:string;
  @Input() tag:string;
  
  content:any;
  
  constructor( ) { }

}
