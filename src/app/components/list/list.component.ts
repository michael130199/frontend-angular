import { Component, OnInit } from '@angular/core';
import { DataApiService }  from "../../services/data-api.service";
import { NewsInterface } from "../../models/news-interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

  getNewsById(id : string ){
    this.dataApiService
    .getNewsById(id)
    .subscribe(news => { 
      this.news = news;
      console.log(news);
    }  );
  }

}
