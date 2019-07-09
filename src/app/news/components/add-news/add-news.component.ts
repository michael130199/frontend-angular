import { Component/*, OnInit */} from '@angular/core';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent  {

  public newsTitle:string;
  public newsAuthor:string;
  public newsDescrip:string;


  constructor() { 
    
  }


  mostrarNombre(){
    console.log(this.newsTitle);
  }

}
