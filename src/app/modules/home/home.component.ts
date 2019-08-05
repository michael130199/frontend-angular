import { Component } from '@angular/core';
import { DataApiService }  from "../../services/data-api.service";
import { NewsInterface } from "../../models/news-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{


  constructor(private dataApiService:DataApiService) { }

  private news: NewsInterface;
  lista:string[]=["hola","que","tal","estas"];

  ngOnInit() {
    this.getListNews();
  }

  getListNews(){
    this.dataApiService
    .getAllNews()
    .subscribe(news => { 
      this.news = news;
      console.log(news);
    }  );
  }

}
