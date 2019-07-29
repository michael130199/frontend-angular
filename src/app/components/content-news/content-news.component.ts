import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-news',
  templateUrl: './content-news.component.html',
  styleUrls: ['./content-news.component.scss']
})
export class ContentNewsComponent implements OnInit {

  @Input() content:any;

  constructor() { }

  ngOnInit() {
    
  }

}
