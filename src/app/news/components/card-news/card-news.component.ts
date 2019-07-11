import { Component, Input } from '@angular/core';

// // componentes
// import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent  {  

  @Input() public day:number;
  @Input() public month:number;
  @Input() public year:number;
  
  @Input() public title:string;
  @Input() public descrip:string;
  @Input() public author:string;
  @Input() public tag:string;
  
  @Input() public content:any;
  

  constructor( ) { }


  

}
