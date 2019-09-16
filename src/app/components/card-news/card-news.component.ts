import { Component, Input } from '@angular/core';

// // componentes
// import { AddNewsComponent } from '../add-news/add-news.component';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})

export class CardNewsComponent  {

  @Input() day: number;
  @Input() month: string;
  @Input() year: number;
  @Input() title: string;
  @Input() descrip: string;
  @Input() author: string;
  @Input() tag: string;
  content: any;

  constructor() {
    this.title = 'Boxing icon has a couple more fightsBoxing icon has the will for';
    this.descrip = 'The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbb.';
    this.author = 'Jane Doe';
    this.tag = 'Institucional';

    this.day = 12;
    this.month = 'Ene';
    this.year = 2019;

  }

}
