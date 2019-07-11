import { Component, EventEmitter, Output, OnChanges, DoCheck} from '@angular/core';

// import { CardNewsComponent } from '../card-news/card-news.component';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})

export class AddNewsComponent{

  public titleCom:string="Agregar Noticias";


  public newsDay:number;
  public newsMonth:number;
  public newsYear:number;
  
  public newsTitle:string;
  public newsDescrip:string;
  public newsAuthor:string;
  public newsTag:string;

  constructor() { 
    
  }


}
